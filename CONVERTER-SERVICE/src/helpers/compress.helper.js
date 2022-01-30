/*
@compress.helper.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const admzip = require('adm-zip');
const fs = require('fs');

module.exports = class Compress {

  //Receives a folder name and compresses it into a zip
  static compressFile(input) {
    const zip = new admzip();

    zip.addLocalFolder(`${__dirname}/../../files/images/`);
    const fileName = `${Date.now()}-${input.split('.')[0]}.zip`;
    const outputPath = `${__dirname}/../../files/zips/${fileName}`;
    fs.writeFileSync(outputPath, zip.toBuffer());

    return `http://localhost:9090/api/download/${fileName}`;
  }
};
