import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("uploads", "images"));
  },
  filename: function (req, file, cb) {
    const nameFile = file.originalname.replace(/ /g, "").toLowerCase();
    cb(null, `${Date.now()}-${nameFile}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
