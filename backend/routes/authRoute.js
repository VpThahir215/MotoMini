import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import adminMiddleware from '../middleware/adminMiddleware.js'
import { authRegister,authLogin,refreshAccessToken,logout,getAllUsersAdmin} from '../controllers/authControllers.js'
import User from '../models/authModels.js'

const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
routeAuth.post("/logout", logout);
routeAuth.post('/refresh', refreshAccessToken);
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


export default routeAuth