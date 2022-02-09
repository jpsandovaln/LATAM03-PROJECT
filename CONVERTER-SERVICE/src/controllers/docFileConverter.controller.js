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
const Converter = require('./converter.controller');
const fs = require('fs').promises;

class docFileConverterController extends Converter{

  static async convert(req, res) {
    try {
      const ext = '.pdf';
      const inputPath = `${__dirname}/../../files/convertDoc/doc/DocTest.docx`;
      const outputPath = `${__dirname}/../../files/convertDoc/pdf/DocTest${ext}`;

      const file = await fs.readFile(inputPath);
      libre.convert(file, ext, undefined, (err, done) => {
        if (err) {
          res.json({error: `Error converting file: ${err}`});
        }
        fs.writeFile(outputPath, done);
      });
      res.json({ message: 'Converted successfully' });
    } catch (error) {
      res.json({ error: error });
    }
  }
}

module.exports = docFileConverterController;
