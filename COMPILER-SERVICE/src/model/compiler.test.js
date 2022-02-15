const Compiler = require('./compiler');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

describe("Test Java Compiler", () => {
    test("Compiler Java Code", async () => {
        const javaCode = path.resolve('./test/files/HelloWorld.java');
        const result = await Compiler.execute(javaCode, '"' + process.env.JAVA_BINARY + '"', 'java');
        expect(result).toEqual('Hello World\r\n');
    });
});