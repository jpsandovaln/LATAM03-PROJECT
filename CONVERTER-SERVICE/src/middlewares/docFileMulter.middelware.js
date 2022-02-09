/*
@docFileMulter.middleware.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const multer = require('multer');

//Process the user request and saves a file in a destination
const uploadDocFileMiddleware = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const pathFile = `${__dirname}/../../files/convertDoc/doc/`;
      cb(null, pathFile);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage }).single('file');
  return upload;
};

module.exports = uploadDocFileMiddleware;
