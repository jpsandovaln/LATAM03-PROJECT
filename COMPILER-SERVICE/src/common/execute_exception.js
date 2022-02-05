const CompilerException = require("./compiler_exception");

class ExecuteException extends CompilerException {
    constructor(message, code) {
        super(message, '403', code);
    }
}

module.exports = ExecuteException;
