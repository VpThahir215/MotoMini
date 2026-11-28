import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    brand: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

   image: {
    url: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    }
},

    description: {
        type: String,
        required: true
    },
    
    isDeleted: {
  type: Boolean,
  default: false,
},

deletedAt: {
  type: Date,
  default: null,
},


}, { timestamps: true });

productSchema.index({
    isDeleted: 1,
    createdAt: -1
});

// // 2. Filter products by brand
// productSchema.index({
//     isDeleted: 1,
//     brand: 1,
//     createdAt: -1
// });

// // 3. Filter products by category
// productSchema.index({
//     isDeleted: 1,
//     category: 1,
//     createdAt: -1
// });

// 4. Filter products by price


const Product = mongoose.model('Product', productSchema);

export default Product;