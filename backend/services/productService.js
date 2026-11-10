import Product from "../models/productModel.js";
export const getAllProducts = async () => {
    const products = await Product.find();

    return products;
};
export const getProductById = async (id) => {
    const product = await Product.findById(id);

    if (!product) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }

    return product;
};