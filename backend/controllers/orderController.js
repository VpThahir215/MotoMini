import {
    createOrder,
    getUserOrders
} from "../services/orderService.js";

export const placeOrder = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const order = await createOrder(userId, req.body);

        return res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });
    } catch (error) {
        next(error);
    }
};

export const getMyOrders = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const orders = await getUserOrders(userId);

        return res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        next(error);
    }
};