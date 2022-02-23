const CompilerException = require("./compiler_exception");

class CommandException extends CompilerException {
    constructor(message) {
        super(message, '404', 'COMP-19875');
    }
}

module.exports = CommandException;
