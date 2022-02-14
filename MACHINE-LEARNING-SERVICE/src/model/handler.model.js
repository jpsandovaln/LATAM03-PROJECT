/*
@handler.model.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const CocoSsd = require('./models/cocoSsd.model');
const Yolo = require('./models/yolo.model');
const path = require('path');
const MachineLearningException = require('../Exceptions/marchineLearning.exception');
const MobileNet = require('./models/mobilenet.model');

// Allows to handle the model chosen by the user
class HandlerModel {
  
  // Chooses a model
  static chooseModel(folderFile, model, object, percentage) {
    const pathFile = path.join(__dirname, `../../files/uploads/images/${folderFile}/`);
    if (model == 'coco') {
      return new CocoSsd(pathFile, percentage, object)
    } else if (model == 'yolo') {
      return new Yolo(pathFile, percentage, object)
    } else if (model == 'mobilenet') {
      return new MobileNet(pathFile, percentage, object)
    } else {
      throw new MachineLearningException(`${model} is not a recognized model, you can choose between coco, yolo or mobilenet`,
      'LATAM03')
    }
  }
}

module.exports = HandlerModel;
