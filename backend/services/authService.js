import User from "../models/authModels.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import 'dotenv/config'
import {createHash} from 'crypto'


const hashToken = (token) => {
    return createHash('sha256')
        .update(token)
        .digest('hex');
};

export const register=async ({name,email,password,role,isblocked})=>{
    const hashedPassword=await bcrypt.hash(password,10)
    const data=await User.create({name,email,password:hashedPassword})
    return data
};
export const loginUser = async ({ email, password }) => {

    const data = await User.findOne({ email });

    if (!data) {
        throw new Error('Invalid email or password');
    }

    const isCompare = await bcrypt.compare(password, data.password);

    if (!isCompare) {
        throw new Error('Invalid email or password');
    }

    // Common payload
    const payload = {
        id: data._id
    };

    // Generate access token
    const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1m'
        }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_TOKEN,
        {
            expiresIn: '7d'
        }
    );

    // Hash refresh token
    const hashedRefreshToken = hashToken(refreshToken);

    // Store hashed refresh token in database
    data.refreshTokenHash = hashedRefreshToken;
    await data.save();

    return {
        data,
        accessToken,
        refreshToken
    };
};