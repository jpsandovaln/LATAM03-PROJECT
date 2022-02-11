/*
@imageConverter.controller.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const fs = require('fs');
const Upload = require('../helpers/upload.helper');
const ImageConverter = require('../models/imageConverter.model');
const Converter = require('./converter.controller');
const { PORT, URL, URLBASE } = process.env;

class ImageConverterController extends Converter {
  
  //Allows to receive the parameters needed by the ImageConverter.model and convert the image according to the user
  static async convert(req, res) {
    const {
      Width,
      Height,
      format,
      rotate,
      isActiveGrayScale,
      isActiveMirrorEffect,
      isActiveNegative,
    } = req.body;

    const inputPath = req.file.path;
    const fileName = req.file.originalname.split('.')[0];
    const savePath = `${__dirname}/../../files/downloadFiles/transform-${fileName}`;

    const size = {
      width: Number(Width) || null,
      height: Number(Height) || null,
    };

    try {
      Upload.uploadVerified(req.file, 'IMAGE');

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
      await convertImage.convert().then((result) => {
        res.json({
          donwloadLink: `${URLBASE}${PORT}${URL}download/transform-${fileName}.${format}`,
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

module.exports = ImageConverterController;
