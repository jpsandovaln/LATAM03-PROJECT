const CommandException = require("../../common/command_exception");
const Command = require("../command");

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command {
    constructor(filePath, pythonPath) {
        super();
        this.filePath = filePath;
        this.pythonPath = pythonPath;
    }

    build() {
        try {
            const command = this.pythonPath + PYTHON_COMPILER + this.filePath;
            return command;
        } catch (error) {
            throw new CommandException('Python error.')
        }
    }
}

module.exports = PythonCommand;
