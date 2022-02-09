class ServerException extends Error {
  constructor(message, status, code){
    super(message);
    this._status = status;
    this._code = code;
  }

  get status(){
    return this._status;
  }

  get code(){
      return this._code;
  }
}

module.exports = ServerException;
