import multer from "multer";

// Store uploaded files temporarily in RAM
const storage = multer.memoryStorage();

// Configure Multer
const upload = multer({
    storage: storage,

    // Maximum file size: 5 MB
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

export default upload;