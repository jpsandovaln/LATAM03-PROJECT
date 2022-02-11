const PythonCommand = require("./command/python_command");
const JavaCommand = require("./command/java_command");
const CompilerException = require("../common/compiler_exception");
const CommandException = require("../common/command_exception");

class CommandFactory {
    static getInstance(lang, filePath, binaryPath) {
        /*const map = CommandFactory.loadCommand(filePath, binaryPath);
        return map.get(lang);*/
        if (lang == 'java') {
            return new JavaCommand(filePath, binaryPath)
        } else if (lang == 'python') {
            return new PythonCommand(filePath, binaryPath)
        } else {
            throw new CommandException('language not found.')
        }
        
    }

    /*static loadCommand(filePath, binaryPath) {
        const map = new Map();
        map.set('java', new JavaCommand(filePath, binaryPath));
        map.set('python', new PythonCommand(filePath, binaryPath));
        return map;
    }*/
}

module.exports = CommandFactory;
