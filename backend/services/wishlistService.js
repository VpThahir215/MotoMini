import Wishlist from "../models/wishlistModel.js";

export const getUserWishlist = async (userId) => {
    const wishlistItems = await Wishlist.find({ user: userId })
        .populate("product");

    return wishlistItems;
};

// ADD product to wishlist
export const addToWishlist = async (userId, productId) => {
    const existingItem = await Wishlist.findOne({
        user: userId,
        product: productId
    });

    if (existingItem) {
          return {
            wishlistItem: existingItem,
            alreadyExists: true
        };
    }

    const wishlistItem = await Wishlist.create({
        user: userId,
        product: productId
    });

    return {
        wishlistItem,
        alreadyExists: false
    };
};

// REMOVE product from wishlist
export const removeWishlistItem = async (userId, wishlistId) => {
    return await Wishlist.findOneAndDelete({
        _id: wishlistId,
        user: userId
    });
};