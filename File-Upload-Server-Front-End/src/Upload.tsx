import { FileUploader } from "react-drag-drop-files"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const fileTypes = ["JPG", "PNG", "PDF", "txt"]

const Upload = () => {

    const [file, setFile] = useState<File | null>(null);
    useEffect(() => {

        if(!file) return;

            const uploadFile = async () => {

                const formData = new FormData();
                formData.append('file',file);
                try{

                    const res = await fetch('http://localhost:3000/api/upload', {
                        method: 'POST',
                        body: formData,
                    })
                    
                    if( res.status === 200 ){
                        toast.success("upload succeded")
                    } 
                }catch(error){
                    console.log(error)
                    toast.error("Could not reach server")
                }             
        }
        uploadFile();

    }, [file])


    const handleDrop = (newFile: File | File[]) => {
        toast.success("File Sending in progress");
        setFile(Array.isArray(newFile) ? newFile[0] : newFile );
    };

    const handleTypeError = () => {
        toast.error("Please submit JPG,PNG,PDF or txt format");
    }

    return (
        <>
        <FileUploader 
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