/*
@compress.helper.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
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

    zip.addLocalFolder(`${__dirname}/../uploadsfolder/video-${input.split('.')[0]}/imagefps-${input.split('.')[0]}/`);
    const fileName = `${Date.now()}-${input.split('.')[0]}.zip`;
    const outputPath = `${__dirname}/../downloadfiles/zips`;
    fs.mkdirSync(outputPath, {recursive:true});
    fs.writeFileSync(outputPath + `/${fileName}`, zip.toBuffer());

    return `http://localhost:9090/api/v1/download/${fileName}`;
  }
};
