const PythonCommand = require("./command/python_command");
const JavaCommand = require("./command/java_command");
const CommandException = require("../common/command_exception");
const CShardCommand = require("./command/cshard_command_adapter");
const JavaCommandProxy = require("./command/java_command_proxy");

class CommandFactory {
    static getInstance(lang, filePath, binaryPath) {
        if (lang == 'java') {
            return new JavaCommand(filePath, binaryPath);
        } else if (lang == 'python') {
            return new PythonCommand(filePath, binaryPath);
        } else if (lang == 'cshard') {
            return new CShardCommand(filePath, binaryPath);
        } else if (lang == 'java_proxy') {
            return new JavaCommandProxy(filePath, binaryPath)
        } else {
            throw new CommandException('language not found.')
        }
    }
}

module.exports = CommandFactory;
