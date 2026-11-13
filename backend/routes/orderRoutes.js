
import express from "express";
import { placeOrder,getMyOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const orderRouter = express.Router();

// Place a new order
orderRouter.post("/", authMiddleware, placeOrder);
orderRouter.get("/", authMiddleware, getMyOrders);

export default orderRouter;
