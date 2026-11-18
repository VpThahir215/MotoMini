import express from 'express';
import { getAllProducts,getOneProduct,addProductAdmin,updateProductAdmin,softDeleteProductAdmin,restoreProductAdmin,hardDeleteProductAdmin,getDeletedProductsAdmin } from '../controllers/productController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routerProduct = express.Router();
routerProduct.get('/', getAllProducts);
routerProduct.get('/:id',getOneProduct)

// Admin route
routerProduct.post('/admin',authMiddleware,adminMiddleware,addProductAdmin)
routerProduct.put(
    "/admin/:id",
    authMiddleware,
    adminMiddleware,
    updateProductAdmin
);
// Soft delete
routerProduct.delete(
    "/admin/:id",
    authMiddleware,
    adminMiddleware,
    softDeleteProductAdmin
);

// Hard delete
routerProduct.delete(
    "/admin/:id/permanent",
    authMiddleware,
    adminMiddleware,
    hardDeleteProductAdmin
);

// Restore
routerProduct.patch(
    "/admin/:id/restore",
    authMiddleware,
    adminMiddleware,
    restoreProductAdmin
);

routerProduct.get(
    "/admin/trash",
    authMiddleware,
    adminMiddleware,
    getDeletedProductsAdmin
);


export default routerProduct;