const express = require('express');
const multer = require('multer');
const fs = require('fs');
const dotenv = require('dotenv');
const Compiler = require('./src/model/compiler')

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
  let binaryPath = '';
  try {
    if (body.lang === 'java') {
      binaryPath = '"' + process.env.JAVA_BINARY + '"';
    } else if (body.lang === 'python') {
      binaryPath = '"' + process.env.PYTHON_BINARY + '"';
    } else if (body.lang === 'cshard') {
      binaryPath = '';
    }
    res.send(await Compiler.execute(file.path, binaryPath, body.lang)); 
  } catch(error) {
    res.status(error.status).send({
      message: error.message,
      code: error.code
    });
  }
});

const port = process.env.PORT || 8080;
console.info(port);

app.listen(port, () => console.info('Server running...'));
