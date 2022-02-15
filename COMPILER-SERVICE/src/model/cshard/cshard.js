const ExternaLibrary = require("./external_library");


class CShardCode {
    constructor() {}

    runCode(fileCode) {
        const external = new ExternaLibrary();
        const result = external.addFile(fileCode).generate();
        return result;
    }
}

module.exports = CShardCode;
