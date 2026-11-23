import cloudinary from "./config/cloudinary.js";


const testCloudinary = async () => {
    try {
        const result = await cloudinary.api.ping();

        console.log("Cloudinary connected successfully!");
        console.log(result);

    } catch (error) {
        console.log("Cloudinary connection failed:");
        console.log(error.message);
    }
};

testCloudinary();