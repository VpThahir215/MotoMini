import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { authRegister,authLogin} from '../controllers/authControllers.js'

const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
routeAuth.get('/check-auth',authMiddleware,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Authenticated",
        user:req.user
    })


})


export default routeAuth