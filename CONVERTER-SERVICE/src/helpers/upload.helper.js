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

const InvalidFileException = require('../Exceptions/invalidFile.exception');

class Upload {
  
  //Receives the video from the server and saves it in the "files" local file
  static uploadVerified(params, type) {
    let { originalname, mimetype } = params;

    if (type === 'DOC') mimetype = 'file/docx';
    const formatSupported = process.env[`FORMATS_SUPPORTED_${type}`];

    if (formatSupported.includes(mimetype.split('/')[1])) {
      const fileData = {
        input: originalname,
      };
      return fileData;
    } else
      throw new InvalidFileException(
        'The file is an Invalid File',
        'CS-LATAM03'
      );
  }
}

module.exports = Upload;
