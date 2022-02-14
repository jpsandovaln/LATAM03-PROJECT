/*
@objectRecognition.controller.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

const path = require('path');
const Decompress = require('../helpers/decompress.helper');
const HandlerModel = require('../models/handler.model');

// Controls the model that will be used to detect the object
class ObjectRecognitionController {

  // Returns the results of the detection according to the model, object and percentage indicated
  static async recognizeObject(req, res) {
    const { zipName, percentage, object, model } = req.body;
    console.log('FIle ' + req.files[0].mimetype.split('/')[0]);
    const {originalname, mimetype} = req.files[0];
    console.log(mimetype.split('/')[0]== 'image');
    try{
      if (mimetype.split('/')[0] == 'image'){
        const flag = true;
      } else {
      const decompressedFilePath = Decompress.decompressFile(
        `${__dirname}/../uploads/zips/${zipName}`
      );
        if (!decompressedFilePath) {
          return res.send('The file has not been unziped');
      }}
    
      const chooseModel = await HandlerModel.chooseModel(model, object, percentage);
      res.send(chooseModel);
    
    } catch(error){
      res.status(error.status).send({
        Error: error.message,
        Code: error.code
      });
    }
  }
}

module.exports = ObjectRecognitionController;
