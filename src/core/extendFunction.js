var ArrLike = require('./ArrLike.js');

function setMutator(constructor, name, fn) {
    constructor.prototype[name] = function() {
        this.__lastReturn = fn.apply(this, arguments);
        return this;
    };
}

function setAccessor(constructor, name, fn, opt) {
    opt = opt || {};
    if (opt.forceChain) {
        chain(name);
    } else {
        constructor.prototype[name] = function() {
            this.__lastReturn = fn.apply(Array.prototype.slice.call(this), arguments);
            return this;
        };
        if (opt.hasChain) {
            chain(name + "$");
        }
    }

    function chain(name) {
        constructor.prototype[name] = function() {
            return new ArrLike(fn.apply(Array.prototype.slice.call(this), arguments));
        };
    }
}

function setGenerator(constructor, name, fn) {
    constructor.prototype[name] = function() {
        return fn.apply(this, arguments);
    };
}
module.exports = {
    setMutator: setMutator,
    setAccessor: setAccessor,
    setGenerator: setGenerator
};