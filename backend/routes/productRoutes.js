import express from 'express';
import { getAllProducts,getOneProduct } from '../controllers/productController.js';

const routerProduct = express.Router();
routerProduct.get('/', getAllProducts);
routerProduct.get('/:id',getOneProduct)

export default routerProduct;