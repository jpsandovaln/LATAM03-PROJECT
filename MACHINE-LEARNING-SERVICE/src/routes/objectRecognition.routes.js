const {Router} = require('express');

const {recognizeObjects, downloadImage} = require('../controllers/objectRecognition.controller');  
const {uploadImagesMiddleware} = require('../middlewares/multer.middleware');
const router = Router();

router.post('/recognize-objects', uploadImagesMiddleware(), recognizeObjects);
router.get('/download-image/:image', downloadImage);

module.exports = router;
