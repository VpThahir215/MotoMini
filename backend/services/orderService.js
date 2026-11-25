
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";
import mongoose from "mongoose";


export const createOrder = async (userId, orderData) => {
    const { customer, paymentMethod, products } = orderData;

    // 1. Validate products array
    if (!Array.isArray(products) || products.length === 0) {
        throw new Error("Your order must contain at least one product");
    }

    // 2. Validate quantities before starting the transaction
    for (const item of products) {
        const quantity = Number(item.quantity);

        if (!Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Invalid product quantity");
        }
    }

    const session = await mongoose.startSession();

    let newOrder;

    try {
        await session.withTransaction(async () => {

            const orderProducts = [];

            // 3. Process products one by one
            for (const item of products) {
                const quantity = Number(item.quantity);

                // 4. Atomically check and decrease stock
                const product = await Product.findOneAndUpdate(
                    {
                        _id: item.productId,
                        stock: { $gte: quantity },
                        isDeleted: false
                    },
                    {
                        $inc: {
                            stock: -quantity
                        }
                    },
                    {
                        new: true,
                        session
                    }
                );

                // 5. If product is unavailable or stock is insufficient
                if (!product) {
                    const existingProduct = await Product.findById(
                        item.productId
                    ).session(session);

                    if (!existingProduct) {
                        throw new Error("Product not found");
                    }

                    throw new Error(
                        `Insufficient stock for ${existingProduct.name}`
                    );
                }

                // 6. Create product snapshot
                orderProducts.push({
                    product: product._id,
                    name: product.name,
                    brand: product.brand,
                    category: product.category,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    quantity
                });
            }

            // 7. Calculate subtotal
            const subtotal = orderProducts.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            );

            const total = Math.round(subtotal);

            // 8. Create order inside the same transaction
            const createdOrders = await Order.create(
                [{
                    user: userId,
                    customer,
                    paymentMethod,
                    products: orderProducts,
                    subtotal,
                    total
                }],
                { session }
            );

            newOrder = createdOrders[0];
        });

        return newOrder;

    } finally {
        await session.endSession();
    }
};

export const getUserOrders = async (userId) => {
    const orders = await Order.find({ user: userId })
        .sort({ orderDate: -1 });

    return orders;
};


export const getAllOrders = async () => {
    const orders = await Order.find()
        .populate("user", "name email")
        .sort({ orderDate: -1 });

    return orders;
};
// Update order status (Admin)
export const updateOrderStatus = async (id, status) => {
  const allowedStatuses = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled"
  ];

  if (!allowedStatuses.includes(status)) {
    const error = new Error("Invalid order status");
    error.statusCode = 400;
    throw error;
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
      runValidators: true
    }
  );

  if (!updatedOrder) {
    const error = new Error("Order not found");
    error.statusCode = 404;
    throw error;
  }

  return updatedOrder;
};