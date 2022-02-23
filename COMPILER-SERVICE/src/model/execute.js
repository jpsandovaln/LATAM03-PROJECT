const { exec } = require('child_process');
const ExecuteException = require('../common/execute_exception');

class Execute {
    run(command) {
        try {
            return new Promise((resolve, reject) => {
                exec(command, (err, stdout, stderr) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({stdout, stderr});
                });
            });
        } catch (error) {
            throw new ExecuteException('error executing command.', 'COMP: 1987777')
        }
    }
}

module.exports = Execute;
