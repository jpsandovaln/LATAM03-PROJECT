const fs = require('fs');

module.exports = class Video {
  
  static getAllFiles = (req, res) => {
    var filesVariable = fs.readdirSync('./src/files');
    res.json(filesVariable);
  };

  static downloadFile = (req, res) => {
    const file = `${__dirname}/../files/${req.params.fileName}`;
    res.download(file);
  };

  static uploadFiles = (req, res) => {
    const filesData = req.files.map((file) => {
      const { originalname, mimetype, filename, size } = file;
      return {
        originalname,
        mimetype,
        filename,
        size,
        downloadlink: `.http://localhost:8080/files/${originalname}`,
      };
    });
    res.json(filesData);
  };
};
