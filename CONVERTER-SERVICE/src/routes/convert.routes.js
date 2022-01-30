/*
@convert.routes.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const { Router } = require('express');
const router = Router();
const ConvertController = require('../controllers/convert.controller');
const VideoConvertor = require('../feature-convertor/feature-convertor');
const { uploadFileMiddleware } = require('../middlewares/multer.middleware');

const convertor = new VideoConvertor(
  `${__dirname}/../videos/video.mp4`,
  `${__dirname}/../images/%2d.jpg`,
  1,
  '100%'
);

router.post('/', uploadFileMiddleware(), ConvertController.convertVideo);


module.exports = router;
