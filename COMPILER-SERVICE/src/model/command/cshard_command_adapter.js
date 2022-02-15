const Command = require("../command");
const CShardCode = require("../cshard/cshard");

class CShardCommand extends Command {
    constructor(filePath, javaPath) {
        super();
        this.filePath = filePath;
        this.javaPath = javaPath;
    }

    build() {
        const cshar = new CShardCode();
        return cshar.runCode(this.filePath);
    }  
}

module.exports = CShardCommand;
