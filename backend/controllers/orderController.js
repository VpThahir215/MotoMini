import {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus    
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

export const getAllOrdersAdmin = async (req, res, next) => {
    try {
        const orders = await getAllOrders();

        return res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {
        next(error);
    }
};
// UPDATE order status (Admin)
export const updateOrderStatusAdmin = async (req, res, next) => {
  try {
    const { status } = req.body;

    const updatedOrder = await updateOrderStatus(
      req.params.id,
      status
    );

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order: updatedOrder
    });

  } catch (error) {
    next(error);
  }
};