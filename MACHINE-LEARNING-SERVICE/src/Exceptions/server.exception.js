/*
@server.exception.js Copyright (c) 2022 Jalasoft
CI 26 Sur #48-41, Ayurá Center, Edificio Unión № 1376, Medellín, Colombia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft.
*/

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
