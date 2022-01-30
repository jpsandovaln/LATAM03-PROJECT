/*
@upload.helper.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

module.exports = class Upload {

  //Receives the video from the server and saves it in the "files" local file
  static uploadVideoMethod(params) {
    const { originalname, mimetype} = params;
    const formatSupported = ['mov', 'm4a', '3gp', '3g2', 'mj2', 'mp4'];
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
