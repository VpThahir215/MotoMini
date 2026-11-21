
import User from "../models/authModels.js";

const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
            .select("role isBlocked");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }
               
        if (user.isBlocked) {
            return res.status(403).json({
                success: false,
                message: "Your account has been blocked"
            });
        }

        if (user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Admin only."
            });
        }

        next();

    } catch (error) {
        next(error);
    }
};

export default adminMiddleware;
