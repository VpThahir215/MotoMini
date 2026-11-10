import connectMongoDb from '../config/db.js';
import Product from '../models/productModel.js';
import products from '../data/products.js';
import mongoose from 'mongoose';


const seedProducts = async () => {
    console.log("starting>...");
    
    try {
        console.log("Seed file started");
        // Connect to MongoDB
        await connectMongoDb();

        // Insert all products into MongoDB
        const result = await Product.insertMany(products);

        console.log(`${result.length} products inserted successfully`);

    } catch (error) {
        console.log("Error seeding products:", error.message);
    } finally {
        // Close MongoDB connection
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    }
};

seedProducts();