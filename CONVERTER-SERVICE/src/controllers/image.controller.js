/*
@ObjectML.js Copyright (c) 2022 Jalasoft
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
const ImageConverter = require('./../models/imageConverter.model')


module.exports = class ImageController{

  //Allows to receive the parameters needed by the ImageConverter.model and convert the image according to the user
  static convertImage(req, res){
    const {Width,
      Height,
      format,
      rotate,
      isActiveGrayScale,
      isActiveMirrorEffect,
      isActiveNegative} = req.body;
    
    const size = {
      width: Number(Width),
      height: Number(Height)
    };
    const uploadRespond = Upload.uploadVerified(req.file);
    if (!uploadRespond) {
      res.send('Insert a supported file');
      return;
    }

    const inputPath = `${__dirname}/../uploadsfolder/image-${req.file.originalname.split('.')[0]}/${req.file.originalname}`;
    const savePath = `${__dirname}/../uploadsfolder/image-${req.file.originalname.split('.')[0]}/convert-${req.file.originalname.split('.')[0]}`;
    fs.mkdirSync(savePath, {recursive:true});

    const convertImage = new ImageConverter(inputPath, `${savePath}/transform-${req.file.originalname.split('.')[0]}`, size, format, Number(rotate), true, false, false);
    let result = convertImage.convert()
    .then((result) => {
      console.log(result);
      res.send(`http://localhost:9090/api/v1/download/transform-${req.file.originalname.split('.')[0]}.${result.data.format}`)
    })
    .catch((result) => {
      console.log(result);
      res.send('There was an error converting the image');
    });
  }
};
