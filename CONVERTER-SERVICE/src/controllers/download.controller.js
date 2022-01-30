/*
@download.controller.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

module.exports = class DownloadController {
    
  //Receives the name of the file and returns the download link
  static downloadVideo(req, res) {
    res.download(`${__dirname}/../../files/zips/${req.params.name}`);
  }
};
