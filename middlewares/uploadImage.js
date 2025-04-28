import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../configs/cloudinaryConfig.js";

// Cấu hình storage cho Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "image_2H3T",   // 📂 tên folder trên cloudinary
    allowed_formats: ["jpg", "png", "jpeg"], // định dạng file cho phép
    transformation: [{ width: 500, height: 500, crop: "limit" }], // resize nếu muốn
  },
});

// Khởi tạo multer với storage vừa config
const upload = multer({ storage });

export default upload;
