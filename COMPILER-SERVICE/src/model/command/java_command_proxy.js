const CommandException = require("../../common/command_exception");
const Command = require("../command");
const JavaCommand = require("./java_command");

class JavaCommandProxy extends Command {
    constructor(filePath, javaPath) {
        super();
        this.filePath = filePath;
        this.javaPath = javaPath;
        this.javaCommand = new JavaCommand(this.filePath, this.javaPath);
    }

    build() { 
        if (this.checkAccess()) {
            return this.javaCommand.build();
        } else {
            throw new CommandException('Access denied');
        }
    }

    checkAccess() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        return hours >= 17;
    }
 }

 module.exports = JavaCommandProxy;