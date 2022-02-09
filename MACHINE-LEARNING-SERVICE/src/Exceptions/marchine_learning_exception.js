const ServerException = require("./server_exception");

class MachineLearningException extends ServerException {
  constructor(message, code){
    super(message, '404', code);
  }
}

module.exports = MachineLearningException;
