import { getAllProducts as getAllProductsService,getProductById,createProduct} from '../services/productService.js';


export const getAllProducts = async (req, res, next) => {
    try {
        // Get filters from URL query parameters
        const { search, brand, category } = req.query;

        // Pass filters to the service
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