import { getUserCart,addToCart,updateCartQuantity,removeCartItem } from "../services/cartService.js";

export const getCart = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const cartItems = await getUserCart(userId);

        res.status(200).json({
            success: true,
            cartItems
        });

    } catch (error) {
        next(error);
    }
};
export const addCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        const cartItem = await addToCart(userId, productId);

        res.status(201).json({
            success: true,
            message: "Product added to cart",
            cartItem
        });

    } catch (error) {
        next(error);
    }
};
export const updateCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { quantity } = req.body;
        const { id } = req.params;

        const cartItem = await updateCartQuantity(
            userId,
            id,
            quantity
        );

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            cartItem
        });

    } catch (error) {
        next(error);
    }
};
export const deleteCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;

        const deletedItem = await removeCartItem(userId, id);

        if (!deletedItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Cart item removed successfully"
        });

    } catch (error) {
        next(error);
    }
};