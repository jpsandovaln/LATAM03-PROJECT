const IDispenser = require("./idispense");

class Dispense100 extends IDispenser {
    constructor() {
        super();
    }

    set nextChain(nextChain) {
        this._dispense = nextChain;
    }

    dispense(value) {
        if (value >= 100) {
            const num = Math.trunc(value / 100);
            const remainder = value % 100;
            console.info('Dispensing 100Bs = ' + num);
            if (remainder != 0) {
                this._dispense.dispense(remainder);
            }
        } else {
            this._dispense.dispense(value);
        }
    }
}

module.exports = Dispense100;
