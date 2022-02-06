/*
@upload.helper.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

module.exports = class Upload {

  //Receives the video from the server and saves it in the "files" local file
  static uploadVerified(params) {
    const { originalname, mimetype} = params;
    const formatSupported = process.env.FORMATSUPPORTED;
    
    if (formatSupported.includes(mimetype.split('/')[1])) {
      const videoData = {
        input: originalname,
        fps: 1,
        finalSize: '100%',
      };
      return videoData;
    }
    return false;
  }
};
