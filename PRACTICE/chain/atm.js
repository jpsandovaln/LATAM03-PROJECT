const Dispense100 = require("./dispense_100");
const Dispense50 = require("./dispense_50");
const Dispense20 = require("./dispense_20");
const Dispense10 = require("./dispense_10");

class ATM {
    constructor(value) {
        this._value = value;
    }

    getMoney() {
        /*if (this._value >= 100) {
            const data = new Dispense100();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 50) {
            const data = new Dispense50();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 20) {
            const data = new Dispense20();
            this._value = data.dispense(this._value);
        }
        if (this._value >= 10) {
            const data = new Dispense10();
            this._value = data.dispense(this._value);
        }*/

        const dispense100 = new Dispense100();
        const dispense50 = new Dispense50();
        const dispense20 = new Dispense20();
        const dispense10 = new Dispense10();

        dispense100.nextChain = dispense50;
        dispense50.nextChain = dispense20;
        dispense20.nextChain = dispense10;

        dispense100.dispense(this._value);
    }

}

const atm = new ATM(380);
atm.getMoney();
