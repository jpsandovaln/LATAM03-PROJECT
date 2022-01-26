const multer = require('multer');

const uploadFileMiddleware = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'src/files');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage }).array('files');
  return upload;
};

module.exports = { uploadFileMiddleware };
