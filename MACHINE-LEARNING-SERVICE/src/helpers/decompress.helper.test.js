/*
@decompress.helper.test.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const Decompress = require('./decompress.helper');
const dotenv = require('dotenv');
const InvalidFileException = require('../Exceptions/invalidFile.exception');
dotenv.config();
const path = require('path');

describe('Test Decompress', () => {
  test('Unnexisting filePath', () => {
    const decompress = Decompress;
    expect(() => {
      decompress.decompressFile('../test/files/aves.jpg');
    }).toThrow(InvalidFileException);
  });

  test('Existing filePath but invalid extention', () => {
    const decompress = Decompress;
    const pathFile = path.join(__dirname, '../../test/files/13.jpg');
    expect(() => {
      decompress.decompressFile(pathFile);
    }).toThrow(InvalidFileException);
  });

  test('Decompress successfully', () => {
    const pathFile = path.join(__dirname, '../../test/files/animales.zip');
    const result = Decompress.decompressFile(pathFile).decompressed;
    expect(result).toEqual(true);
  });
});