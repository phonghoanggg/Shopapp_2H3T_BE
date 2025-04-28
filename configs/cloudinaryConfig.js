import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ 
  cloud_name: 'dgcpmlway', 
  api_key: process.env.API_KEY_CLOUDINARY, 
  api_secret: process.env.API_SECRIT_CLOUDINARY
});
export default cloudinary;