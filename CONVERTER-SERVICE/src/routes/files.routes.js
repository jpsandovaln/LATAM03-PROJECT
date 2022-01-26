const { Router } = require('express');
const router = Router();
const Video = require('../controllers/files.controller');
const { uploadFileMiddleware } = require('../middlewares/multer.middleware');

router.get('/', Video.getAllFiles);
router.get('/:fileName', Video.downloadFile);
router.post('/', uploadFileMiddleware(), Video.uploadFiles);

module.exports = router;
