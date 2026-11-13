
import Product from "../models/productModel.js";

export const getAllProducts = async (filters = {}) => {
    const { search, brand, category } = filters;

    const query = {};

    // 1. Search by product name or brand
    if (search?.trim()) {
        const searchRegex = new RegExp(
            search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "i"
        );

        query.$or = [
            { name: searchRegex },
            { brand: searchRegex }
        ];
    }

    // 2. Filter by brand
    if (brand?.trim()) {
        query.brand = brand.trim();
    }

    // 3. Filter by category
    if (category?.trim()) {
        query.category = category.trim();
    }

    const products = await Product.find(query);

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
