import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { authRegister,authLogin} from '../controllers/authControllers.js'

const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
routeAuth.get('/profile',authMiddleware,(req,res)=>{
    res.status(201).json({
        success:true,
        message:"Middleware is working",
        user:req.user
    })


})


export default routeAuth