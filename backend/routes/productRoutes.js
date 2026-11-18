import express from 'express';
import { getAllProducts,getOneProduct,addProductAdmin } from '../controllers/productController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerProduct = express.Router();
routerProduct.get('/', getAllProducts);
routerProduct.get('/:id',getOneProduct)

// Admin route
routerProduct.post('/admin',authMiddleware,adminMiddleware,addProductAdmin)


export default routerProduct;