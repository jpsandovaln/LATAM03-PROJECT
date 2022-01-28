const cocoSsd = require('@tensorflow-models/coco-ssd');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;

class ObjectML{
  constructor (image, percentage, objectRequired){
    this.image = image;
    this.percentage = percentage;
    this.objectRequired = objectRequired;
  }

  /** 
    *Method predict() allows to load the model and decode the image in order to make a detection of the desired object
  */

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
      }else{
        return true;
      }
    });
      return await Promise.resolve(arrayObjects);
    }
}

module.exports = ObjectML;
