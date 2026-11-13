
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    // The user who placed this order
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    // Customer and delivery details
    customer: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pinCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },

    // Payment method
    paymentMethod: {
        type: String,
        enum: ["cod", "upi", "card", "bank"],
        required: true
    },

    // Products included in this order
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            name: String,
            brand: String,
            category: String,
            price: Number,
            image: String,
            description: String,
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],

    subtotal: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    orderDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Pending"
    }

}, { timestamps: true });


const Order = mongoose.model("Order", orderSchema);

export default Order;
