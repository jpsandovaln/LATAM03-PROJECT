class CompilerException extends Error {
    constructor(message, status, code){
        super(message);
        this._status = status;
        this._code = code;
    }

    getStatus() {
        return this._status;
    }

    getCode() {
        return this._code
    }
}

module.exports = CompilerException;
