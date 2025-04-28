import cloudinary from "../configs/cloudinaryConfig.js";
const upLoadImageController = {
  uploadImage: async (req, res) => {
    try {
      const images = req.files.map((file) => file.path);
      console.log(images)
      const uploadImages = []
      for(let image of images) {
        const uploadResult = await cloudinary.uploader.upload(image)
        uploadImages.push({
          url: uploadResult.secure_url,
          publicId: uploadResult.public_id,
        })
      }
      return res.status(200).json({
        message: "Uploaded images successfully!",
        data: uploadImages,
      });
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: error.message,
      });
    }
  },
  removeImage: async (req, res) => {
    try {
      const publicId = req.query.publicId;
      if (!publicId) {
        return res.status(400).json({
          message: "Missing publicId",
        });
      }
      console.log("publicId1111",publicId)
      await cloudinary.uploader.destroy(`image_2H3T/${publicId}`);
      return res.status(200).json({
        message: "Deleted image successfully!",
      });
    } catch (error) {
      return res.status(400).json({
        name: error.name,
        message: error.message,
      });
    }
  }
}
export default upLoadImageController;