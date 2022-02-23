const IDispenser = require("./idispense");

class Dispense10 extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(nextChain) {
        this._dispense = nextChain;
    }

    dispense(value) {
        if (value >= 10) {
            const num = Math.trunc(value / 10);
            const remainder = value % 10;
            console.info('Dispensing 10Bs = ' + num);
        }
    }
}

module.exports = Dispense10;
