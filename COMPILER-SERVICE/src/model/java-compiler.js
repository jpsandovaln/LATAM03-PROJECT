const { rejects } = require('assert');
const { exec } = require('child_process');

class JavaCompiler {
    constructor(filePath, javaPath) {
        console.info('new instance');
        this.filePath = filePath;
        this.javaPath = javaPath;
    }

    execute() {
        const command = '"C:/Program Files/Java/jdk1.8.0_251/bin/javac" ' + this.filePath + ' && "C:/Program Files/Java/jdk1.8.0_251/bin/java" -cp D:/code2022/ HelloWorld';
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.info('err ' + err);
                return;
            }
            console.info('stdout ' + stdout);
            console.info('stderr ' + stderr);
        });
    }

    run() {
        const command = '"C:/Program Files/Java/jdk1.8.0_251/bin/javac" D:/code2022/HelloWorld.java && "C:/Program Files/Java/jdk1.8.0_251/bin/java" -cp D:/code2022/ HelloWorld';
        return new Promise((resolve, reject) => {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                }
                resolve({stdout, stderr});
            });
        });
    }
}

/*const compiler = new JavaCompiler();
compiler.execute();*/

module.exports = JavaCompiler;
