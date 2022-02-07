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

//Controls the model that will be used to detect the object
class ObjectRecognitionController {

  //Returns the results of the detection according to the model, object and percentage indicated
  static async recognizeObject(req, res) {
    const { percentage, object, model } = req.body;
    console.log(req.body);
    const decompressedFilePath = Decompress.decompressFile(
      `${__dirname}/../uploads/zips/animales.zip`
    );
    if (!decompressedFilePath) {
      res.send('The file has not been unziped');
      return;
    }
    if (model == 'coco') {
      const cocoSsd = new CocoSsd(
        path.join(__dirname, '../uploads/images/'),
        percentage,
        object
      );
      const result = await cocoSsd.predict();
      if (result.length === 0) {
        res.send(`There is not the object ${object} in the image`);
      }
      res.send({ result });
    } else if (model == 'yolo') {
      const yolo = new Yolo(
        path.join(__dirname, '../uploads/images/'),
        percentage,
        object
      );
      const result = await yolo.predict();
      if (result.length === 0) {
        res.send(`There is not the object ${object} in the image`);
      }
      res.send({ result });
    } else {
      res.send(`${model} is not a recognized model, you can choose between coco or yolo`);
    }
  }
}
module.exports = ObjectRecognitionController;
