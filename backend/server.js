import express from 'express'
import connectMongoDb from './config/db.js'
import 'dotenv/config'
import mongoose from 'mongoose'
import errorMiddleware from './middleware/errormiddleware.js'
import cors from 'cors'

const app=express()
const PORT=process.env.PORT
app.use(cors())
app.get('/',(req,res,next)=>{
   try{
    res.status(201).json({
        massege:"Hyyyyyyy"
    })
  
   }catch(error){
    next(error)
   }
})
app.get('/register',(req,res,next)=>{
      try{
    res.status(201).json({
        massege:"Register page"
    })
  
   }catch(error){
    next(error)
   }
})

app.use(errorMiddleware)
const startServer=async ()=>{
    try{
        await connectMongoDb()
        app.listen(PORT,()=>{
            console.log(`Your Server Connected On Port ${PORT}`);
            console.log("MongoDb Connection",mongoose.connection.readyState);
            
            
        })
        
    }catch(error){
        console.log("MongoDb Connection Faild",error.message);
        process.exit(1)
        
    }
}
startServer()
