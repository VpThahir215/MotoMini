import { getAllProducts as getAllProductsService,getProductById} from '../services/productService.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await getAllProductsService();

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