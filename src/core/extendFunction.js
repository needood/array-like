var arr = require('../var/arr');
function setMutator(constructor,name, fn) {
    constructor.prototype[name] = function() {
        this.__lastReturn = fn.apply(this, arguments);
        return this;
    };
}

function setAccessor(constructor,name, fn) {
    constructor.prototype[name] = function() {
        this.__lastReturn = fn.apply(arr.slice.call(this), arguments);
        return this;
    };
}
function setGenerator(constructor,name, fn) {
    constructor.prototype[name] = function() {
        var newArr = fn.apply(this, arguments);
        newArr.__lastReturn = this;
        return newArr;
    };
}
module.exports = {
    setMutator: setMutator,
    setAccessor: setAccessor,
    setGenerator: setGenerator
};
