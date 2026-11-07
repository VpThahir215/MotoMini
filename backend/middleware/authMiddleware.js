import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    try {
        // Get token from cookie
        const token = req.cookies.accessToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not provided. Please login."
            });
        }

        // Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        // Store decoded user information
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or Expired token"
        });
    }
};

export default authMiddleware;