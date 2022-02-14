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

const CocoSsd = require('../models/cocoSsd.model');
const Yolo = require('../models/yolo.model');
const path = require('path');
const MachineLearningException = require('../Exceptions/marchineLearning.exception');

// Allows to handle the model chosen by the user
class HandlerModel {
  
  // Chooses a model and returns the result with the prediction
  static async chooseModel(model, object, percentage){
    let result;
    
    if (model == 'coco') {
      const cocoSsd = new CocoSsd(
        path.join(__dirname, '../../files/uploads/images/'),
        percentage,
        object
      );
       
      result = await cocoSsd.predict();
    } else if (model == 'yolo') {
      const yolo = new Yolo(
        path.join(__dirname, '../../files/uploads/images/'),
        percentage,
        object
      );
        
      result = await yolo.predict();
    } else {
      throw new MachineLearningException(
        `${model} is not a recognized model, you can choose between coco or yolo`,
        'LATAM03'
      );
    }
    if (result.length === 0) {
      return {message: `There is not the object ${object} in the image`};
    } else{
      return result;
    }
    
  } 
}

module.exports = HandlerModel;
