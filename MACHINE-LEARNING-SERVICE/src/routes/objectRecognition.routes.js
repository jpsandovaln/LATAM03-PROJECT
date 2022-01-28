const {Router} = require('express');

// const {recognizeObjects, downloadImage} = require('../controllers/objectRecognition.controller');
const ObjectRecognitionController = require('../controllers/objectRecognition.controller');
const {uploadImagesMiddleware} = require('../middlewares/multer.middleware');
const router = Router();

router.post('/recognize-objects', uploadImagesMiddleware(), ObjectRecognitionController.recognizeObjects);
router.get('/download-image/:image', ObjectRecognitionController.downloadImage);

module.exports = router;
