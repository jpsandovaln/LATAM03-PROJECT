const path = require('path');
const CommandException = require('../../common/command_exception');
const Command = require('../command');

class JavaCommand extends Command {
    constructor(filePath, javaPath) {
        super();
        this.filePath = filePath;
        this.javaPath = javaPath;
    }

    build() {
        try {
            if(this.filePath == '' || this.javaPath == '') {
                throw new CommandException("Error");
            }
            const JAVA_COMPILER = this.javaPath + 'javac ';
            const JAVA_EXECUTE = this.javaPath + 'java ';
            const JAVA_CP_PARAMETER = '-cp ';
            const JAVA_AND = ' && ';
            const JAVA_SPACE = ' ';
            const command =
                JAVA_COMPILER +
                this.filePath +
                JAVA_AND +
                JAVA_EXECUTE +
                JAVA_CP_PARAMETER +
                path.dirname(this.filePath) +
                JAVA_SPACE +
                path.parse(this.filePath).name;
            return command;
        } catch(error) {
            throw new CommandException('Error building java command.')
        }
    }
}

module.exports = JavaCommand;
