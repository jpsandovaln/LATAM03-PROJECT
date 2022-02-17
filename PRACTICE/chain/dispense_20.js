const IDispenser = require("./idispense");

class Dispense20 extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(nextChain) {
        this._dispense = nextChain;
    }

    dispense(value) {
        if (value >= 20) {
            const num = Math.trunc(value / 20);
            const remainder = value % 20;
            console.info('Dispensing 20Bs = ' + num);
            if (remainder != 0) {
                this._dispense.dispense(remainder);
            }
        } else {
            this._dispense.dispense(value);
        }
    }
}

module.exports = Dispense20;
