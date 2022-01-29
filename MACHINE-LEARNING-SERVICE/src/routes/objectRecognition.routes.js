const {Router} = require('express');
const router = Router();
const ObjectRecognitionController = require('../controllers/objectRecognition.controller');
const {uploadImagesMiddleware} = require('../middlewares/multer.middleware');

router.post('/recognize-objects', uploadImagesMiddleware(), ObjectRecognitionController.recognizeObjects);
router.get('/download-image/:image', ObjectRecognitionController.downloadImage);

module.exports = router;
