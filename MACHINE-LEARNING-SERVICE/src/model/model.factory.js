/*
@model.factory.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const Decompress = require('../helpers/decompress.helper');
const HandlerModel = require('./handler.model');

// Calls the predict method with the corresponding instance
class ModelFactory {

  // returns the result of the prediction
  static async giveResult(req, zipName, model, object, percentage) {
    
    let folderFile = '';
    if (typeof zipName == 'undefined') {
      const imageName = req.files[0].originalname.split('.')[0];
      folderFile = `image-${imageName}/`;
    } else {
      const decompressedFilePath = Decompress.decompressFile(
        `${__dirname}/../../files/uploads/zips/${zipName}`
      );
      folderFile = 'decompress/';
      if (!decompressedFilePath) {
        return 'The file has not been unziped';
      }
    }
    const modelInstance = HandlerModel.chooseModel(folderFile, model, object, percentage);
    const result = await modelInstance.predict();
    if (result.length === 0) {
      return { message: `There is not the object ${object} in the image` };
    } else {
      return result;
    }
  }
}

module.exports = ModelFactory;
