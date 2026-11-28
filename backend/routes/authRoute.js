import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'
import { authRegister,authLogin,refreshAccessToken,logout,getAllUsersAdmin,updateUserAdmin} from '../controllers/authControllers.js'
import User from '../models/authModels.js'
import { createAndStoreOtp } from '../utils/otpStorage.js'
import sendEmail from '../utils/sendEmail.js'
import { verifyEmailOtp } from '../controllers/authControllers.js'

const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
routeAuth.post("/logout", logout);
routeAuth.post('/refresh', refreshAccessToken);
routeAuth.post("/verify-email", verifyEmailOtp);
routeAuth.get('/check-auth', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select("name email role isBlocked");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.isBlocked) {
            return res.status(403).json({
                success: false,
                message: "Your account has been blocked"
            });
        }

        res.set({
            "Cache-Control": "no-store, no-cache, must-revalidate, private",
            "Pragma": "no-cache",
            "Expires": "0"
        });

        return res.status(200).json({
            success: true,
            message: "Authenticated",
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


// Admin route

routeAuth.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    getAllUsersAdmin
);
routeAuth.put(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  updateUserAdmin
);

routeAuth.get("/test-otp", async (req, res, next) => {
    try {
        const email="bcaproject57@gmail.com"
        const otp = await createAndStoreOtp(email);
//          await sendEmail(
//             email,
//             "MotoMini - Email Verification",
//             `Your MotoMini verification OTP is ${otp}.

// This OTP is valid for 5 minutes.

// Please do not share this code with anyone.`
//         );


        res.json({
            success: true,
            message: "OTP stored successfully. Please check your email.",
           
        });

    } catch (error) {
        next(error);
    }
});

export default routeAuth