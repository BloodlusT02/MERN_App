const  cloudnary = require("cloudinary").v2;
const fs = require("fs");
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET
});

const uploadOnCloudnary = async (localFilePath) => {
    try {

        if(!localFilePath) return null
        // upload the file on cloudnary
        const response = await cloudnary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudnary ", response.url);
        return response

    } catch (error) {
        // remove the locally save temporary as the upload opration got failed
        fs.unlinkSync(localFilePath) 
        return null;
    }
};

module.exports = { uploadOnCloudnary }