class ExternaLibrary {
    constructor() {}

    addFile(file) {
        this._addFile = file;
        return this;
    }

    generate() {
        return 'ipconfig';
    }
}

module.exports = ExternaLibrary;
