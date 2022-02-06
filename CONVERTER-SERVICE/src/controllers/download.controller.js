/*
@download.controller.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const fs = require('fs');

module.exports = class DownloadController {
    
  //Receives the name of the file and returns the download link
  static downloadVideo(req, res) {
    const pathDownload =`${__dirname}/../../files/zips/${req.params.name}`;
    //fs.mkdirSync(pathDownload, {recursive:true});
    res.download(pathDownload);
  }
};
