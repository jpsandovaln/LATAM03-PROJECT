/*
@convert.controller.js Copyright (c) 2022 Jalasoft
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
const VideoConverter = require('../converter/video.converter');

module.exports = class ConverterController {
  
  // Executes and verifies the response of the 3 methods involved in the project
  static convertVideo(req, res) {
    const uploadRespond = Upload.uploadVideoMethod(req.file);

    if (!uploadRespond) {
      res.send('Insert a supported file');
      return;
    }

    VideoConverter.converter(uploadRespond)
      .then(() => {
        const compressResponse = Compress.compressFile(uploadRespond.input);
        res.send(compressResponse);
      })
      .catch(() => {
        res.send('There was an error converting the video');
      });
  }
};
