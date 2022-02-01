const { exec } = require('child_process');

class Execute {
    run(command) {
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

module.exports = Execute;
