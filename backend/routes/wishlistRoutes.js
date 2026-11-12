
import express from "express";

import {
    getWishlist,
    addWishlist,
    deleteWishlist
} from "../controllers/wishlistController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const whishlistRouter = express.Router();

// GET wishlist
whishlistRouter.get("/", authMiddleware, getWishlist);

// ADD wishlist item
whishlistRouter.post("/", authMiddleware, addWishlist);

// DELETE wishlist item
whishlistRouter.delete("/:id", authMiddleware, deleteWishlist);

export default whishlistRouter;
