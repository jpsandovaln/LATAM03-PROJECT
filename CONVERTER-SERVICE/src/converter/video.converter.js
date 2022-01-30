/*
@Video.converter.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const FfmpegCommand = require('fluent-ffmpeg');

//Represents a model for convert Video into Images 
class VideoConverter {

  //Allows to convert a video into an specif number of images by setting the Frames Per Second with an specific size 
  static converter({input, fps, finalSize}) {
    return new Promise(function(resolve, reject){
      FfmpegCommand(`../files/videos/${input}`)
      .size(finalSize)
      .fps(fps)
      .save('../files/images/%3d.jpg')
      .on('start',function(){
        console.log('Processing starting...');
      })
      .on('error', function(err){
        reject(err);
      })
      .on('end', function(){       
        console.log('Processing finished! ');
        resolve(true);
      })
    })
  }
}

module.exports = VideoConverter;
