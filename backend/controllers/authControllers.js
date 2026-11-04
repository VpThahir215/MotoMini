import { register,loginUser } from "../services/authService.js";

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
        res.cookie('token', user.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge:  60 * 1000
        });

        res.status(200).json({
            success: true,
            message: 'Login successful'
        });

    } catch (error) {
        next(error);
    }
}