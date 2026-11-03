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
    try{
        const user=await loginUser(req.body)
         res.status(201).json({
       massage:'Registration successfull',
        data:user.token
      })

    }
     catch (error){
        next(error)
     }
}