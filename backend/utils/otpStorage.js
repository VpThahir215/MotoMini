import redisClient from "../config/redis.js";
import { generateOtp, hashOtp } from "./generateOtp.js";
import sendEmail from "./sendEmail.js";
import User from "../models/authModels.js";

export const createAndStoreOtp = async (email) => {

    // 1. Generate OTP
    const otp = generateOtp();

    // 2. Hash OTP
    const hashedOtp = hashOtp(otp);

    // 3. Create Redis key
    const redisKey = `otp:${email}`;

    // 4. Store hashed OTP for 5 minutes
    await redisClient.set(
        redisKey,
        hashedOtp,
        { EX: 300 }
    );
await sendEmail(
        email,
        "MotoMini - Email Verification",
        `Your MotoMini verification OTP is ${otp}. It expires in 5 minutes.`
    );
    // 5. Return original OTP for email sending
    return otp;
};


export const verifyOtp = async (email, enteredOtp) => {

    const redisKey = `otp:${email}`;
    const attemptsKey = `otp-attempts:${email}`;

    // 1. Get stored OTP hash
    const storedOtpHash = await redisClient.get(redisKey);

    if (!storedOtpHash) {
        throw new Error("OTP expired or not found");
    }

    // 2. Check incorrect attempts
    const attempts = Number(
        await redisClient.get(attemptsKey) || 0
    );

    if (attempts >= 5) {
        throw new Error("Too many incorrect attempts. Request a new OTP.");
    }

    // 3. Hash entered OTP
    const enteredOtpHash = hashOtp(enteredOtp);

    // 4. Compare hashes
    if (storedOtpHash !== enteredOtpHash) {

        const newAttempts = await redisClient.incr(attemptsKey);

        if (newAttempts === 1) {
            await redisClient.expire(attemptsKey, 300);
        }

        throw new Error("Invalid OTP");
    }

    // 5. Find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("User not found");
    }

    // 6. Verify email
    user.isEmailVerified = true;
    await user.save();

    // 7. Delete OTP and attempts
    await redisClient.del(redisKey);
    await redisClient.del(attemptsKey);

    return true;
};