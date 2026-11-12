
import {
    getUserWishlist,
    addToWishlist,
    removeWishlistItem
} from "../services/wishlistService.js";

// GET wishlist
export const getWishlist = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const wishlistItems = await getUserWishlist(userId);

        res.status(200).json({
            success: true,
            wishlistItems
        });

    } catch (error) {
        next(error);
    }
};

// ADD wishlist item
export const addWishlist = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        const result = await addToWishlist(userId, productId);

        if (result.alreadyExists) {
            return res.status(200).json({
                success: true,
                alreadyExists: true,
                message: "Product already exists in your wishlist",
                wishlistItem: result.wishlistItem
            });
        }

        res.status(201).json({
            success: true,
            alreadyExists: false,
            message: "Product added to wishlist",
            wishlistItem: result.wishlistItem
        });

    } catch (error) {
        next(error);
    }
};

// DELETE wishlist item
export const deleteWishlist = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const deletedItem = await removeWishlistItem(userId, id);

        if (!deletedItem) {
            return res.status(404).json({
                success: false,
                message: "Wishlist item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product removed from wishlist"
        });

    } catch (error) {
        next(error);
    }
};
