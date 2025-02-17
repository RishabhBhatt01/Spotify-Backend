// import {Cloudinary as CoreCloudinary, Util} from "cloudinary-core";

// export const url = (publicId, options) => {
//     try {
//         const scOptions = Util.withSnakeCaseKeys(options);
//         const cl = CoreCloudinary.new();
//         return cl.url(publicId, scOptions);
//     } catch (e) {
//         console.error(e);
//         return null;
//     }
// };

// export const openUploadWidget = (options, callback) => {
//     return window.cloudinary.openUploadWidget(options, callback);
// };


// Chatgpt updated version


import { Cloudinary } from "cloudinary-core"; 

export const url = (publicId, options = {}) => {
    try {
        const cloudinaryInstance = new Cloudinary({ cloud_name: "your_cloud_name" });
        return cloudinaryInstance.url(publicId, options);
    } catch (error) {
        console.error("Error generating Cloudinary URL:", error);
        return null;
    }
};

export const openUploadWidget = (options, callback) => {
    if (window.cloudinary) {
        return window.cloudinary.createUploadWidget(options, callback);
    } else {
        console.error("Cloudinary upload widget is not loaded.");
    }
};

