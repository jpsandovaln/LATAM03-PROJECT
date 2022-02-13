/*
@converterChecker.helper.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const fs = require('fs');
const fsPromise = require('fs').promises;
const ImageConverter = require('../models/imageConverter.model');
const VideoConverter = require('../models/videoConverter.model');
const ConverterException = require('../Exceptions/converter.exception');
const libre = require('libreoffice-convert');

// Contains methods that checks converter models
class ConverterChecker {
  
  //Verifies the convert image process
  static async convertImage(params) {
    const {
      width,
      height,
      format,
      rotate,
      isActiveGrayScale,
      isActiveMirrorEffect,
      isActiveNegative,
      savePath,
      fileName,
      inputPath,
    } = params;

    const size = {
      width: Number(width) || null,
      height: Number(height) || null,
    };

    fs.mkdirSync(savePath, { recursive: true });

    const convertImage = new ImageConverter(
      inputPath,
      `${savePath}/transform-${fileName}`,
      size,
      format,
      Number(rotate),
      isActiveGrayScale == 'true',
      isActiveMirrorEffect == 'true',
      isActiveNegative == 'true'
    );

    await convertImage.convert();
  }

  //Verifies the convert video process
  static async convertVideo(params, req) {
    const { fps, imageSize, saveVideoPath, saveImagesPath } = params;
    fs.mkdirSync(saveVideoPath, { recursive: true });
    fs.mkdirSync(saveImagesPath, { recursive: true });

    const convertVideo = new VideoConverter(
      req.file.path,
      `${saveImagesPath}/%3d.jpg`,
      Number(fps),
      imageSize
    );

    await convertVideo.convert();
  }

  //Verifies the convert document process
  static async convertDocFile(params) {
    const { ext, inputPath, outputPath } = params;
    const file = await fsPromise.readFile(inputPath);

    libre.convert(file, ext, undefined, async (err, done) => {
      if (err) {
        throw new ConverterException(
          'There was an error converting the file',
          'CS-LATAM03'
        );
      }
      await fsPromise.writeFile(outputPath, done);
    });
  }
}

module.exports = ConverterChecker;
