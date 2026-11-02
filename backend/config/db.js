import mongoose from "mongoose";
import 'dotenv/config'

const connectMongoDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connected");
        
    }
    catch(error){
        console.log(error.message);
        
    }
}
export default connectMongoDb