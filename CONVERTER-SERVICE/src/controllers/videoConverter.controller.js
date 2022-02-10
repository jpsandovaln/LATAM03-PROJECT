/*
@videoConverter.controller.js Copyright (c) 2022 Jalasoft
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

class VideoConverterController extends Converter {
  
  // Executes and verifies the response of the 3 methods involved in the project
  static async convert(req, res) {
    const { fps, imageSize } = req.body;
    const folderVideoName = `video-${req.file.originalname.split('.')[0]}/`;
    const folderImageName = `images-fps-${
      req.file.originalname.split('.')[0]
    }/`;
    const saveVideoPath = `${__dirname}/../../files/uploads/${folderVideoName}`;
    const saveImagesPath = `${__dirname}/../../files/uploads/${folderImageName}`;

    try {
      const uploadRespond = Upload.uploadVerified(req.file, 'VIDEO');

      fs.mkdirSync(saveVideoPath, { recursive: true });
      fs.mkdirSync(saveImagesPath, { recursive: true });

      const convertVideo = new VideoConverter(
        req.file.path,
        `${saveImagesPath}/%3d.jpg`,
        Number(fps),
        imageSize
      );

      await convertVideo.convert().then(() => {
        const { input } = uploadRespond;
        const zipName = `${Date.now()}-${input.split('.')[0]}.zip`;
        Compress.compressFile(input, zipName);
        res.json({
          donwloadLink: `${URLBASE}${PORT}${URL}downloadFiles/${zipName}`,
        });
      });
    } catch (error) {
      res.status(error.status).send({
        error: error.message,
        code: error.code,
      });
    }
  }
}

module.exports = VideoConverterController;
