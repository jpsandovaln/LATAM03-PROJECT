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
const ObjectML = require('../models/objectML');

// Represents a controller layer 
class ObjectRecognitionController {
    
  // Recognizes an object calling ObjectML class
  static async recognizeObjects(req, res) {
    const { files: images } = req;
    const modelOne = new ObjectML(
      path.join(__dirname, '../uploads/images/Dogs_cats.jpg'), 0.8, 'dog');
    const result = await modelOne.predict();
    if (result.length === 0) {
      return res.json({msg: 'There is not the object in the image.'});
    }
    res.json({result});
  }

  // Downloads an image from uploads file
  static downloadImage(req, res) {
    const { image } = req.params;
    const path = './uploads/images/' + image;
    res.download(path, (err) => {
      if (err) {
        return res.json({ msg: err });
      }
    });
  }
}

module.exports = ObjectRecognitionController;