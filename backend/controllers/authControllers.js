import { register,loginUser } from "../services/authService.js";
import jwt from 'jsonwebtoken'
import User from "../models/authModels.js";
import {createHash}from 'crypto'

const hashToken = (token) => {
    return createHash('sha256')
        .update(token)
        .digest('hex');
};

export const authRegister=async (req,res,next)=>{
    try{
        const user=await register(req.body)
        console.log("Request Body:", user);
        res.status(201).json({
            message:"Registration Successfull",
            data:user
        })

    }
    catch(err){
        next(err)
    }
}
export const authLogin=async (req,res,next)=>{
    try {
        const user = await loginUser(req.body);
        

        

        // Store JWT inside HttpOnly cookie
        res.cookie('accessToken', user.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge:  60 * 1000
        });
      res.cookie('refreshToken', user.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
});

        res.status(200).json({
            success: true,
            message: 'Login successful',
             user: {
        id: user.data._id,
        name: user.data.name,
        email: user.data.email,
        role: user.data.role,
        access:user.data.bolecked
    }
        });

    } catch (error) {
        next(error);
    }
}
export const refreshAccessToken = async (req, res) => {
    
    
    try {
        console.log('refreeessshhhhhhh');
        // 1. Get refresh token from cookie
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: 'Refresh token not provided'
            });
        }

        // 2. Verify refresh token
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        // 3. Find user and retrieve stored hash
        const user = await User.findById(decoded.id)
            .select('+refreshTokenHash');
            console.log("Decoded user ID:", decoded.id);
console.log("User found:", !!user);
console.log("Stored hash exists:", !!user?.refreshTokenHash);

        if (!user || user.isBlocked) {
            return res.status(401).json({
                success: false,
                message: 'User not found or blocked'
            });
        }

        // 4. Compare refresh token hash
        const hashedToken = hashToken(refreshToken);
        
console.log("Incoming hash:", hashedToken);
console.log("Database hash:", user.refreshTokenHash);
console.log(
    "Hashes match:",
    hashedToken === user.refreshTokenHash
);

        if (hashedToken !== user.refreshTokenHash) {
            return res.status(401).json({
                success: false,
                message: 'Invalid refresh token'
            });
        }

        // 5. Generate new access token
        const newAccessToken = jwt.sign(
            { id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
        );

        // 6. Send new access token cookie
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: 'Access token refreshed'
        });

    } catch (error) {
         console.error("REFRESH ERROR:", error.name);
    console.error("ERROR MESSAGE:", error.message);
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired refresh token'
        });
    }
};
export const logout = async (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};