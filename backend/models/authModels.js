
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Full name is required"],
            trim: true
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters long"]
        },
        role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    isBlocked: {
        type: Boolean,
        default: false
    },
    refreshTokenHash: {
    type: String,
    default: null,
    select: false
}

    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;
