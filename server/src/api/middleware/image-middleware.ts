import multer, { DiskStorageOptions, Options } from "multer";

const storageOptions: DiskStorageOptions = {
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + "-" + file.originalname);
  },
};

const imageStorage = multer.diskStorage(storageOptions);

const options: Options = {
  storage: imageStorage,
};

const ImageUploadMiddleware = multer(options);

export default ImageUploadMiddleware.single("img");
