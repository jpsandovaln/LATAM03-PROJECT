/*
@filterResults.helper.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

const MachineLearningException = require("../Exceptions/marchine_learning_exception");

class FilterResults {
  
  //Filters the found objects according to the received parameters
  static filterFunction(imagesToPredictArray, objectRequired, percentage) {
    const foundObjectsArray = [];
    if(typeof percentage !== 'number'){
      throw new MachineLearningException();
    }
    imagesToPredictArray.forEach((predictions) => {
      predictions.predict.every((prediction) => {
        if (
          objectRequired === prediction.class &&
          prediction.score >= percentage
        ) {
          foundObjectsArray.push({
            fileName: predictions.fileName,
            object: prediction.class,
            Score: prediction.score,
          });
          return false;
        } else {
          return true;
        }
      });
    });
    return foundObjectsArray;
  }
}

module.exports = FilterResults;
