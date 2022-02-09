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

const objectAssign = require('object-assign');
const path = require('path');
const Decompress = require('../helpers/decompress.helper');
const { threadId } = require('worker_threads');
const CocoSsd = require('../models/cocoSsd.model');
const Yolo = require('../models/yolo.model');
const InvalidFileException = require('../Exceptions/invalid_file_exception');

//Controls the model that will be used to detect the object
class ObjectRecognitionController {

  //Returns the results of the detection according to the model, object and percentage indicated
  static async recognizeObject(req, res) {
    const { zipName, percentage, object, model } = req.body;
    console.log(typeof zipName !== 'undefined');
    try{
    const decompressedFilePath = Decompress.decompressFile(
      `${__dirname}/../uploads/zips/${zipName}`
    );
    if (!decompressedFilePath) {
      res.send('The file has not been unziped');
      return;
    }
    
    if (model == 'coco') {
      try{
      const cocoSsd = new CocoSsd(
        path.join(__dirname, '../uploads/images/'),
        percentage,
        object
      );
      
      const result = await cocoSsd.predict();
      if (result.length === 0) {
        res.send(`There is not the object ${object} in the image`);
      }else {
      console.log(result);
      res.send({ result });
      }
    }catch(error){
        res.status(error.status).send({
          message: error.message,
          code: error.code
        });
      }
    } else if (model == 'yolo') {
      const yolo = new Yolo(
        path.join(__dirname, '../uploads/images/'),
        percentage,
        object
      );
      try{
      const result = await yolo.predict();
      if (result.length === 0) {
        res.send(`There is not the object ${object} in the image`);
      }else{
      res.send({ result });
      }
    }catch(error){
      res.status(error.status).send({
        message: error.message,
        code: error.code
      });
    }
    } else {
      res.send(`${model} is not a recognized model, you can choose between coco or yolo`);
    }
  }catch(error){
    res.status(error.status).send({
      message: error.message,
      code: error.code
    });
  }
  }
}

module.exports = ObjectRecognitionController;
