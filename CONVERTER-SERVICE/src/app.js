/*
@app.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
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

// app.use('/static', express.static(`${__dirname}/public`));
app.use('/api/convert', require('./routes/convert.routes'));
app.use('/api/download', require('./routes/download.routes'));

app.listen(port, () => console.log(`Example app listening at ${port}`));
