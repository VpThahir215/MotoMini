import User from "../models/authModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

export const register=async ({name,email,password,role,isblocked})=>{
    const hashedPassword=await bcrypt.hash(password,10)
    const data=await User.create({name,email,password:hashedPassword})
    return data
}
export const loginUser=async ({email , password})=>{

    

    console.log("nnneee",email);
    
    
    const data = await User.findOne({email});
    console.log(data,"check")
    if(!data){
        throw new Error('user is not exist') 

    }
    const isCompare=await bcrypt.compare(password,data.password)
    if(!isCompare){
    throw new Error('Invalid email or password!') 

}
    const token=jwt.sign(
        {
            id:data._id
        },
        
        process.env.JWT_SECRET,
        {
          expiresIn:'1m'
        }
    )
    return {
        data,
        token
    }
}
