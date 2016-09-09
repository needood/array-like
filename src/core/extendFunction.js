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
module.exports = {
    setMutator: setMutator,
    setAccessor: setAccessor
};
