import User from "../models/authModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

export const register=async ({name,email,password})=>{
    const hashedPassword=await bcrypt.hash(password,10)
    const data=await User.create({name,email,password:hashedPassword})
    return data
}
export const loginUser=async ({email,password})=>{
    const data= await User.findOne({email})
    if(!data){
        throw new Error('Invalid your email!')
    }
    const isCompare=await bcrypt.compare(password,data.password)
    if(!isCompare){
    throw new Error('Invalid email or password')

}
    const token=jwt.sign(
        {
            userEmail:data.email,
            id:data._id
        },
        
        process.env.JWT_SECRET,
        {
          expiresIn:'1h'
        }
    )
    return {
        data,
        token
    }
}
