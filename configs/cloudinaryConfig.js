import dotenv from "dotenv";
import pkg from "cloudinary";

dotenv.config(); // Đảm bảo biến môi trường được tải

const { v2: cloudinary } = pkg;

cloudinary.config({ 
  cloud_name: "dgcpmlway",
  api_key: process.env.API_KEY_CLOUDINARY, 
  api_secret: process.env.API_SECRIT_CLOUDINARY
});

export default cloudinary;
