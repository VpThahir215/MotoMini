
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
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

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
 // Step 1: Check whether an image was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload a product image"
            });
        }

        // Step 2: Upload image to Cloudinary
        const result = await uploadToCloudinary(req.file.buffer);
        console.log("Cloudinary result:", result);
console.log("Image URL:", result.secure_url);
console.log("Image Public ID:", result.public_id);

        // Step 3: Prepare product data
        const productData = {
            ...req.body,
            image: {
                url: result.secure_url,
                publicId: result.public_id
            }
        };

console.log("Product data image:", productData.image);
    const product = await createProduct(productData);

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
        let imageData;

        // Check whether admin uploaded a new image
        if (req.file) {
            // Upload new image to Cloudinary
            const result = await uploadToCloudinary(req.file.buffer);

            imageData = {
                url: result.secure_url,
                publicId: result.public_id
            };
        }

        // Prepare updated product data
        const productData = {
            ...req.body,
            ...(imageData && { image: imageData })
        };

        const updatedProduct = await updateProduct(
            req.params.id,
            productData
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
