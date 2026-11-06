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
        console.log("auth Login Page",user);
        

        // Store JWT inside HttpOnly cookie
        res.cookie('token', user.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge:  60 * 1000
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