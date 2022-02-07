/*
@app.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.PORT || 8080;

app.use(process.env.URL + 'convert', require('./routes/converter.routes'));
app.use(process.env.URL + 'download', require('./routes/download.routes'));
app.use(process.env.URL + 'image', require('./routes/image.routes'));
app.use(process.env.URL + 'composite', require('./routes/compositer.routes'));

app.listen(port, () => console.log(`Example app listening at ${port}`));
