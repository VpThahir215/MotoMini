
import {
  getAllProducts as getAllProductsService,
  getProductById,
  createProduct,
  updateProduct,
  softDeleteProduct,
  hardDeleteProduct,
  restoreProduct,
  getDeletedProducts
} from "../services/productService.js";

// GET all active products
export const getAllProducts = async (req, res, next) => {
  try {
    const { search, brand, category } = req.query;

    const products = await getAllProductsService({
      search,
      brand,
      category
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    next(error);
  }
};

// GET one product by ID
export const getOneProduct = async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
};

// CREATE product (Admin)
export const addProductAdmin = async (req, res, next) => {
  try {
    const product = await createProduct(req.body);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE product (Admin)
export const updateProductAdmin = async (req, res, next) => {
  try {
    const updatedProduct = await updateProduct(
      req.params.id,
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

// SOFT DELETE product (Admin)
export const softDeleteProductAdmin = async (req, res, next) => {
  try {
    const product = await softDeleteProduct(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product moved to trash",
      product
    });
  } catch (error) {
    next(error);
  }
};

// PERMANENTLY DELETE product (Admin)
export const hardDeleteProductAdmin = async (req, res, next) => {
  try {
    const product = await hardDeleteProduct(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product permanently deleted",
      product
    });
  } catch (error) {
    next(error);
  }
};

// RESTORE product from trash (Admin)
export const restoreProductAdmin = async (req, res, next) => {
  try {
    const product = await restoreProduct(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product restored successfully",
      product
    });
  } catch (error) {
    next(error);
  }
};

// GET all deleted products (Admin)
export const getDeletedProductsAdmin = async (req, res, next) => {
  try {
    const products = await getDeletedProducts();

    return res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    next(error);
  }
};
