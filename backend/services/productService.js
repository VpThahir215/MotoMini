
import Product from "../models/productModel.js";

export const getAllProducts = async (filters = {}) => {
    const { search, brand, category } = filters;

  const query = {
    isDeleted: false
};

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
export const createProduct = async (productData) => {
    const {
        name,
        brand,
        category,
        price,
        stock,
        image,
        description
    } = productData;

    const newProduct = await Product.create({
        name,
        brand,
        category,
        price,
        stock,
        image:{
            url :image.url,
            publicId:image.publicId
        },
        description
    });

    return newProduct;
};

export const updateProduct = async (id, productData) => {
    const product = await Product.findById(id);

    if (!product) {
        const error = new Error("Product not found");
        error.statusCode = 404;
        throw error;
    }

    // Update normal product fields
    product.name = productData.name ?? product.name;
    product.brand = productData.brand ?? product.brand;
    product.category = productData.category ?? product.category;
    product.price = productData.price ?? product.price;
    product.stock = productData.stock ?? product.stock;
    product.description = productData.description ?? product.description;

    // Update image only when a new image is provided
    if (productData.image) {
        product.image = productData.image;
    }

    await product.save();

    return product;
};
export const softDeleteProduct = async (id) => {
    const product = await Product.findByIdAndUpdate(
        id,
        {
            isDeleted: true,
            deletedAt: new Date()
        },
        { new: true }
    );

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
export const hardDeleteProduct = async (id) => {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
export const restoreProduct = async (id) => {
    const product = await Product.findByIdAndUpdate(
        id,
        {
            isDeleted: false,
            deletedAt: null
        },
        { new: true }
    );

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
export const getDeletedProducts = async () => {
    const products = await Product.find({
        isDeleted: true
    }).sort({ deletedAt: -1 });

    return products;
};