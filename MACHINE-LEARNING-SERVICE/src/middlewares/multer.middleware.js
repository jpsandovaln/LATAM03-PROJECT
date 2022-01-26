const multer = require('multer');

// Uploads images
function uploadImagesMiddleware() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/images')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });
      
    const upload = multer({ 
        storage,
        limits: {fileSize: 50000}
    }).array('images');

    return upload;
}

module.exports = {
    uploadImagesMiddleware
}
