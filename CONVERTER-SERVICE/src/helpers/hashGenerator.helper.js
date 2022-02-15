const hash = require('object-hash');

class HashGenerator {

  static generateHashFile(fileBuffer) {
    const fileHash = hash.MD5(fileBuffer);
    return fileHash;
  }
}


module.exports = HashGenerator;