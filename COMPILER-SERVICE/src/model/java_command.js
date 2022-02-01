const path = require('path');
const Command = require('./command');

class JavaCommand extends Command {
    constructor(filePath, javaPath) {
        super();
        this.filePath = filePath;
        this.javaPath = javaPath;
    }

    build() {
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
    }
}

module.exports = JavaCommand;
