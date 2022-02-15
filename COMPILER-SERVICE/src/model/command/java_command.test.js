const JavaCommand = require('./java_command');

describe("Test Java Command", () => {
    test("Command success", () => {
        const javaCommand = new JavaCommand("d:/javatest.java", "d:/javabinary/bin/");
        const result = javaCommand.build();
        console.info(result);
        expect(result).toEqual('d:/javabinary/bin/javac d:/javatest.java && d:/javabinary/bin/java -cp d:/ javatest');
    });

    test("invalid input data", () => {
        expect(() => {
            const javaCommand = new JavaCommand("", "");
            javaCommand.build();
        }).toThrow('Error building java command.')
    })
})
