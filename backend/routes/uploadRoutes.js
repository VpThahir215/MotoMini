import express from 'express'
import upload from '../middleware/uploadMiddleware.js'
import uploadToCloudinary from '../utils/uploadToCloudinary.js'
const uploadRouter=express.Router()


uploadRouter.post("/image", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please select an image"
            });
        }

        const result = await uploadToCloudinary(req.file.buffer);

        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            image: {
                url: result.secure_url,
                publicId: result.public_id
            }
        });

    } catch (error) {
        console.error("Image upload error:", error);

        return res.status(500).json({
            success: false,
            message: "Image upload failed"
        });
    }
});

export default uploadRouter;