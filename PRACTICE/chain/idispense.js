class IDispenser {
    constructor() {
        if (this.constructor == IDispenser) {
            throw new Error('IDispenser abtract class cannot be instantiated');
        }
    }

    set nextChain(nextChain) {
        throw new Error('dispense() must be implemented');
    }

    dispense(value) {
        throw new Error('dispense() must be implemented');
    }
}

module.exports = IDispenser;
