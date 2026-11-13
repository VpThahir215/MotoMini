
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

export const createOrder = async (userId, orderData) => {

    const { customer, paymentMethod, products } = orderData;

    // 1. Validate products array
    if (!Array.isArray(products) || products.length === 0) {
        throw new Error("Your order must contain at least one product");
    }

    // 2. Find products and prepare order items
    const orderProducts = await Promise.all(
        products.map(async (item) => {
             console.log("Incoming product:", item);
        console.log("Searching Product ID:", item.productId);

            const product = await Product.findById(item.productId);
               console.log("Product found:", product);

            if (!product) {
                throw new Error("Product not found");
            }

            const quantity = Number(item.quantity);

            if (!Number.isInteger(quantity) || quantity < 1) {
                throw new Error("Invalid product quantity");
            }

            // 3. Check available stock
            if (product.stock < quantity) {
                throw new Error(
                    `Insufficient stock for ${product.name}`
                );
            }

            // 4. Create product snapshot
            return {
                product: product._id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                price: product.price,
                image: product.image,
                description: product.description,
                quantity
            };
        })
    );

    // 5. Calculate subtotal using database prices
    const subtotal = orderProducts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Match your existing checkout calculation
    const total = Math.round(subtotal);

    // 6. Save order in MongoDB
    const newOrder = await Order.create({
        user: userId,
        customer,
        paymentMethod,
        products: orderProducts,
        subtotal,
        total
    });

    return newOrder;
};
export const getUserOrders = async (userId) => {
    const orders = await Order.find({ user: userId })
        .sort({ orderDate: -1 });

    return orders;
};