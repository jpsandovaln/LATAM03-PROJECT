/*
@compositer.controller.js Copyright (c) 2022 Jalasoft
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

const ImageCompositer = require('../models/imageCompositer.model');
const fs = require('fs');
const path = require('path');
const { PORT, URL, URLBASE } = process.env;

module.exports = class CompositerController {

  // Executes and verifies the response of the 3 methods involved in the project
  static async compositeImages(req, res) {
    const top = Number(req.body.top);
    const left = Number(req.body.left);
    const format = req.body.format;
    const backgroundImage = req.files.backgroundImage[0];
    const image = req.files.images[0];
    const images = [{ input: image.path, top, left }];
    const fileName = `composite-${image.originalname}`;
    const downloadPath = path.join(__dirname, `../../files/downloadFiles/`);
    const newFolder = `${downloadPath}${fileName.split('.')[0]}`;
    const savePath = `${downloadPath}${fileName.split('.')[0]}/${
      fileName.split('.')[0]
    }`;

    fs.mkdirSync(newFolder, { recursive: true });

    const imageCompositer = new ImageCompositer(
      backgroundImage.path,
      images,
      savePath,
      format
    );
    
    const compositerResponse = await imageCompositer.composite();
    if (!compositerResponse.response) {
      return res.json({
        msg: 'Something went wrong when trying to combine the images',
      });
    }
    res.json({
      donwloadLink: `${URLBASE}${PORT}${URL}download/${
        fileName.split('.')[0]
      }.${format}`,
    });
  }
};
