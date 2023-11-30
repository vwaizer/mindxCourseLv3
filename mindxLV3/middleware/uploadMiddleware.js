import multer from "multer";
import path from "path";



export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("upload/img"));
    },
    filename: function (req, file, cb) {
        console.log(file);
        
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix+'-' +file.originalname) 
        
      
    }
  })
  export const uploadMiddle = multer({ storage: storage })