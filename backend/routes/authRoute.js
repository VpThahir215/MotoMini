import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { authRegister,authLogin,refreshAccessToken,logout} from '../controllers/authControllers.js'

const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
routeAuth.post("/logout", logout);
routeAuth.post('/refresh', refreshAccessToken);
routeAuth.get('/check-auth',authMiddleware,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Authenticated",
        user:req.user
    })


})


export default routeAuth