/*
@convert.controller.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const Upload = require('../helpers/upload.helper');
const Compress = require('../helpers/compress.helper');
const VideoConvertor = require('../feature-convertor/feature-convertor');

module.exports = class ConvertController {

  //Executes and verifies the response of the 3 methods involved in the project 
  static convertVideo(req, res) {
    const uploadRespond = Upload.uploadVideoMethod(req.file);
    if (!uploadRespond) res.send('Insert a suppoted file');
    VideoConvertor.converter(uploadRespond)
      .then(() => {
        const compressResponse = Compress.compressFile(uploadRespond.input);
        res.send(compressResponse);
      })
      .catch(() => {
        res.send('There was an error converting the video');
      });
  }
};
