const JavaCommand = require("./java_command");
const PythonCommand = require("./python_command");
const Execute = require("./execute");

class Compiler {
    static async execute(filePath, binaryPath, lang) {
        let command;
        if (lang === 'java') {
            const langCommand = new JavaCommand(filePath, binaryPath);
            command = langCommand.build();
        } else if (lang === 'python') {
            const langCommand = new  PythonCommand(filePath, binaryPath);
            command = langCommand.build();
        } else {
            throw new Compiler('Invalid language', '400', 'COMP-94521');
        }
        const execute = new Execute();
        const result = await execute.run(command); 
        return result.stdout; 
    }
}

module.exports = Compiler;
