/*
@docFileConverter.routes.js Copyright (c) 2022 Jalasoft
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const { Router } = require('express');
const router = Router();
const docFileConverterController = require('../controllers/docFileConverter.controller');
const uploadDocFileMiddleware = require('../middlewares/docFileMulter.middelware')

router.post('/', uploadDocFileMiddleware(), docFileConverterController.convert);

module.exports = router;
