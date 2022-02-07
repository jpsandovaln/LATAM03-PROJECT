/*
@converter.controller.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const Upload = require('../helpers/upload.helper');
const Compress = require('../helpers/compress.helper');
const VideoConverter = require('../models/videoConverter.model');
const fs = require('fs');

module.exports = class ConverterController {
  
  // Executes and verifies the response of the 3 methods involved in the project
  static convertVideo(req, res) {
    const uploadRespond = Upload.uploadVerified(req.file);
    const {fps, imageSize} = req.body;
    if (!uploadRespond) {
      res.send('Insert a supported file');
      return;
    }
    const savePath = `${__dirname}/../uploadsfolder/video-${req.file.originalname.split('.')[0]}/imagefps-${req.file.originalname.split('.')[0]}`;
    fs.mkdirSync(savePath, {recursive:true});
    const convertVideo = new VideoConverter(req.file.path, `${savePath}/%3d.jpg`, Number(fps), imageSize);
    convertVideo.convert()
      .then(() => {
        const compressResponse = Compress.compressFile(uploadRespond.input);
        res.send(compressResponse);
      })
      .catch(() => {
        res.send('There was an error converting the video');
      });
  }
};
