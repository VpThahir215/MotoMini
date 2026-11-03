import express from 'express'
import { authRegister,authLogin} from '../controllers/authControllers.js'
const routeAuth=express.Router()
routeAuth.post('/register',authRegister)
routeAuth.post('/login',authLogin)
export default routeAuth