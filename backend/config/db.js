import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

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