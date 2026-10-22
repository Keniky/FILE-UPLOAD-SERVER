import { FileUploader } from "react-drag-drop-files"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const fileTypes = ["JPG", "PNG", "PDF", "txt"]

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleChange = (file) => {
        setFile(file);
    };

    const handleDrop = () => {
        toast.success("File Upload Succeded");
        console.log("succeded")
        toast.success("File Sending in progress");
    };

    const handleTypeError = () => {
        toast.error("Please submit JPG,PNG,PDF or txt format");
    }

    return (
        <>
        <FileUploader 
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            onDrop={handleDrop}
            onTypeError={handleTypeError}
            />
            <Toaster/>
        </>
    )
}

export default Upload;