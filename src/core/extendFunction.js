var ArrLike = require('./ArrLike.js');
var arr = require('../var/arr');
function setMutator(constructor,name, fn) {
    constructor.prototype[name] = function() {
        this.__lastReturn = fn.apply(this, arguments);
        return this;
    };
}

function setAccessor(constructor,name, fn,opt) {
    opt = opt || {};
    constructor.prototype[name] = function() {
        this.__lastReturn = fn.apply(arr.slice.call(this), arguments);
        return this;
    };
    if(opt.hasChain){
        constructor.prototype[name+"$"] = function(){
            return new ArrLike(fn.apply(arr.slice.call(this), arguments));
        };
    }
}
function setGenerator(constructor,name, fn) {
    constructor.prototype[name] = function() {
        return fn.apply(this, arguments);
    };
}
module.exports = {
    setMutator: setMutator,
    setAccessor: setAccessor,
    setGenerator: setGenerator
};
