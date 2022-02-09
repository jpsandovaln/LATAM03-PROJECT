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
const Converter = require('./converter.controller');
const fs = require('fs');
const { PORT, URL, URLBASE } = process.env;

module.exports = class VideoConverterController extends Converter {
  
  // Executes and verifies the response of the 3 methods involved in the project
  static convertVideo(req, res) {
    const { fps, imageSize } = req.body;
    const uploadRespond = Upload.uploadVerified(req.file);
    if (!uploadRespond) {
      res.send('Insert a supported file');
      return;
    }

    const folderName = `video-${req.file.originalname.split('.')[0]}/`;
    const savePath = `${__dirname}/../../files/convertVideo/images/${folderName}`;
    fs.mkdirSync(savePath, { recursive: true });

    const convertVideo = new VideoConverter(
      req.file.path,
      `${savePath}/%3d.jpg`,
      Number(fps),
      imageSize
    );
    convertVideo
      .convert()
      .then(() => {
        const { input } = uploadRespond;
        const zipName = `${Date.now()}-${input.split('.')[0]}.zip`;
        Compress.compressFile(input, zipName);
        res.json({
          donwloadLink: `${URLBASE}${PORT}${URL}download/${zipName}`,
        });
      })
      .catch(() => {
        res.json({ msg: 'There was an error converting the video' });
      });
  }
};
