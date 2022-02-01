const express = require('express');
const dotenv = require('dotenv');
const JavaCommand = require('./src/model/java_command');
const Execute = require('./src/model/execute');

const app = express();
dotenv.config();

app.get('/api/v1/compiler', async(req, res) => {
  const javaCommand = new JavaCommand('D:/code2022/HelloWorld.java', '"C:/Program Files/Java/jdk1.8.0_251/bin/"');
  const command = javaCommand.build();
  const execute = new Execute();
  const result = await execute.run(command);  
  res.send(result.stdout);
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('Server running...'));
