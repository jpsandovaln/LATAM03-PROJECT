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

const ImageCompositer = require('../models/ImageCompositer.model');
const path = require('path')

module.exports = class CompositerController {
  
  // Executes and verifies the response of the 3 methods involved in the project
  static async compositeImages(req, res) {
    const top = Number(req.body.top);
    const left = Number(req.body.left);
    const format = req.body.format;
    const backgroundImage = req.files.backgroundImage[0];
    const image = req.files.images[0];
    const images = [{ input: image.path, top, left }];
    console.log(image);
    const imageCompositer = new ImageCompositer(
      backgroundImage.path,
      images,
      path.join(__dirname, `../downloadfiles/${format}/composite-${image.originalname.split('.')[0]}`),
      format
    );
    const compositerResponse = await imageCompositer.composite();
    console.log(compositerResponse.response);
    if (!compositerResponse.response) {
      return res.json({msg: 'Something went wrong when trying to combine the images'});
    }
    res.send(`http://localhost:9090/api/v1/download/composite-${image.originalname.split('.')[0]}.${format}`); // TODO: Indstead of this, add the link to download
  }
};
