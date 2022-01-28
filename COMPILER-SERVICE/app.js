const express = require('express');
const dotenv = require('dotenv');
const javaCompiler = require('./src/model/java-compiler');

const app = express();
dotenv.config();

app.get('/api/v1/compiler', async(req, res) => {
  const compiler = new javaCompiler('D:/code2022/HelloWorld.java', '');
  const result = await compiler.run();
  res.send(result.stdout);
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('Server running...'));
