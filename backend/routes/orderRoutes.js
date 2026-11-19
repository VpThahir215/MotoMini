
import express from "express";
import { placeOrder,getMyOrders,getAllOrdersAdmin,updateOrderStatusAdmin } from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const orderRouter = express.Router();


// Customer routes


orderRouter.post("/", authMiddleware, placeOrder);
orderRouter.get("/", authMiddleware, getMyOrders);

// Admin route


orderRouter.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    getAllOrdersAdmin
);
orderRouter.patch(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  updateOrderStatusAdmin
);

export default orderRouter;
