/*
@docFileConverter.controller.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const libre = require('libreoffice-convert');
const ConverterException = require('../Exceptions/converter.exception');
const Upload = require('../helpers/upload.helper');
const Converter = require('./converter.controller');
const fs = require('fs').promises;

class docFileConverterController extends Converter {

  // Converts .docx files to .pdf
  static async convert(req, res) {
    const { originalname } = req.file;
    const ext = '.pdf';
    const folderPath = `${__dirname}/../../files/uploads/application-${
      originalname.split('.')[0]
    }`;
    const inputPath = `${folderPath}/${originalname}`;
    const outputPath = `${folderPath}/${originalname.split('.')[0]}${ext}`;

    try {
      Upload.uploadVerified(req.file, 'DOC');

      const file = await fs.readFile(inputPath);

      libre.convert(file, ext, undefined, (err, done) => {
        if (err) {
          throw new ConverterException(
            'There was an error converting the file',
            'CS-LATAM03'
          );
        }
        fs.writeFile(outputPath, done);
      });
      res.json({ message: 'Converted successfully' });
    } catch (error) {
      res.status(error.status).send({
        error: error.message,
        code: error.code,
      });
    }
  }
}

module.exports = docFileConverterController;
