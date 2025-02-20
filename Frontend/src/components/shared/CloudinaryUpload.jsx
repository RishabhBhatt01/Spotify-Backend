import { openUploadWidget } from "../../utils/cloudinaryservice";
import { cloudinary_upload_preset } from "../../../config";
const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dqdhjvto7",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                  console.log(result.info.secure_url);
                  
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-4 font-semibold my-4"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;