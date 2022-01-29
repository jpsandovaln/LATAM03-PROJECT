/*
@ObjectML.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const cocoSsd = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

// Represents the object recognition system
class ObjectML{

  constructor (image, percentage, objectRequired){
    this.image = image;
    this.percentage = percentage;
    this.objectRequired = objectRequired;
  }
 
  // Method predict() allows to load the model and decode the image in order to make a detection of the desired object.
  async predict(){
    const results = await Promise.all([cocoSsd.load(), fs.readFile(this.image)]);
    const model = results[0];
    const imgTensor = tf.node.decodeImage(new Uint8Array(results[1]), 3);
    const predictions = await model.detect(imgTensor);
    const arrayObjects = [];
    predictions.every((prediction)=> {
      if(this.objectRequired == prediction.class && prediction.score >= this.percentage){
        arrayObjects.push({'object': prediction.class, 'Score': prediction.score});
        return false;
      } else{
        return true;
      }
    });
    return arrayObjects;
  }
}

module.exports = ObjectML;
