const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/api/v1/compiler', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('Server running...'));
