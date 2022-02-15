/*
@fileValidator.middleware.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

const fs = require('fs');
const File = require('../models/file.model');
const path = require('path');
const HashGenerator = require('../helpers/hashGenerator.helper');

// Represents a validator for uploaded file 
class FileValidator {

  // Validates one uploaded file if it exists in database
  static async validateUploadOneFile(req, res, next) {
    const { buffer: fileBuffer, mimetype } = req.file;
    const format = mimetype.split('/')[1];
    const fileHash = HashGenerator.generateHashFile(fileBuffer);
    try {
      const fileFound = await File.findOne({ hash: fileHash });
      const uploadPath = path.join(__dirname, '../../files/uploads/' + fileHash );
      const uploadSave = path.join(uploadPath,`${fileHash}.${format}`);
      
      if (fileFound) {
        req.file.path = uploadSave;
        return next();
      }

      fs.mkdirSync(uploadPath, { recursive: true });
      fs.writeFile (uploadSave, fileBuffer, (err) => {
        if (!err) {
          const newFile = new File({
            hash: fileHash,
            path: uploadSave
          });
    
          newFile.save()
            .then(() => {
              req.file.path = uploadSave;
              return next();
            })
            .catch(() => {
              res.json({ error: 'Something went wrong when saving in dabatase' });
            })
        }
      });
    } catch (error) {
      res.json({ error: 'Something went wrong when uploading file'});
    }
  }
}

module.exports = FileValidator;
