import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
    getCart,
    addCart,
    updateCart,
    deleteCart
} from "../controllers/cartController.js";



const routerCart = express.Router();

routerCart.get("/", authMiddleware, getCart);

routerCart.post("/", authMiddleware, addCart);

routerCart.put("/:id", authMiddleware, updateCart);

routerCart.delete("/:id", authMiddleware, deleteCart);

export default routerCart;