const Command = require("./command");

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command {
    constructor(filePath, pythonPath) {
        super();
        this.filePath = filePath;
        this.pythonPath = pythonPath;
    }

    build() {
        const command = this.pythonPath + PYTHON_COMPILER + this.filePath;
        return command;
    }
}

module.exports = PythonCommand;
