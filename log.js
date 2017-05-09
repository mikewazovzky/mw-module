class Log {
    constructor(value = null) {

        if(!value) {
            throw new Error('No input provided.');
        }    

        if(typeof value !== 'string') {
            throw new Error('String must be provided.');
        }         
        
        this._value = value;
    }
    // setter
    set value(value) {
        this._value = value;
    }    
    // getter
    get value() {
        return this._value;
    }

    log() {
        console.log(this._value);
        return this._value;
    }
}

module.exports = Log;