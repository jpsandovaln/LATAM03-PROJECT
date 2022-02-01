class Command {
    constructor() {
        if (this.constructor == Command) {
            throw new Error('Error abstract class cannot be instantiated');
        }
    }

    build() {
        throw new Error('build() must be implemented');
    }
}

module.exports = Command;