const IDispenser = require("./idispense");

class Dispense50 extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(nextChain) {
        this._dispense = nextChain;
    }

    dispense(value) {
        if (value >= 50) {
            const num = Math.trunc(value / 50);
            const remainder = value % 50;
            console.info('Dispensing 50Bs = ' + num);
            if (remainder != 0) {
                this._dispense.dispense(remainder);
            }
        } else {
            this._dispense.dispense(value);
        }
    }
}

module.exports = Dispense50;
