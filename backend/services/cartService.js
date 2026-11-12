import Cart from "../models/cartModel.js";



export const getUserCart = async (userId) => {
    const cartItems = await Cart.find({
        user: userId
    }).populate("product");

    return cartItems;
};  
export const addToCart = async (userId, productId) => {
    const existingItem = await Cart.findOne({
        user: userId,
        product: productId
    });

    if (existingItem) {
        existingItem.quantity += 1;
        return await existingItem.save();
    }

    const cartItem = await Cart.create({
        user: userId,
        product: productId,
        quantity: 1
    });

    return {cartItem,
          alreadyExists: false
    };
};
export const updateCartQuantity = async (userId, cartId, quantity) => {
    const cartItem = await Cart.findOneAndUpdate(
        {
            _id: cartId,
            user: userId
        },
        {
            quantity
        },
        {
            new: true,
            runValidators: true
        }
    );

    return cartItem;
};
export const removeCartItem = async (userId, cartId) => {
    return await Cart.findOneAndDelete({
        _id: cartId,
        user: userId
    });
};