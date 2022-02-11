const Execute = require("./execute");
const CommandFactory = require("./command_factory");

class Compiler {
    static async execute(filePath, binaryPath, lang) {
        const commandInstance = CommandFactory.getInstance(lang, filePath, binaryPath);
        const execute = new Execute();
        const result = await execute.run(commandInstance.build()); 
        return result.stdout; 
    }
}

module.exports = Compiler;
