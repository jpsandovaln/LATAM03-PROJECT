const express = require('express');
const multer = require('multer');
const fs = require('fs');
const dotenv = require('dotenv');
const JavaCommand = require('./src/model/java_command');
const PythonCommand = require('./src/model/python_command');
const Execute = require('./src/model/execute');

const app = express();
dotenv.config();

const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    const path = './upload/';
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage });

app.post('/api/v1/compiler', upload.single('file'), async(req, res) => {
  const { file, body } = req;
  let command = '';
  if (body.lang === 'java') {
    const langCommand = new JavaCommand(file.path, '"C:/Program Files/Java/jdk1.8.0_251/bin/"');
    command = langCommand.build();
  } else if (body.lang === 'python') {
    const langCommand = new PythonCommand(file.path, 'C:/python39/');
    command = langCommand.build();
 } else {
    res.send('Language not support.');
  }
  const execute = new Execute();
  const result = await execute.run(command);  
  res.send(result.stdout);
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('Server running...'));
