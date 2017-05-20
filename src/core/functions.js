var arr = Array.prototype;
var ArrLike = require('./ArrLike.js');
var extendFunction = require('./extendFunction');
var setMutator = extendFunction.setMutator;
var setAccessor = extendFunction.setAccessor;
var setGenerator = extendFunction.setGenerator;
var mutatorFunctions = ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'copyWithin', 'fill'];

var accessorFunctions = ['join', 'toString', 'toLocaleString', 'some', 'every', 'includes', 'indexOf', 'lastIndexOf', 'forEach', 'entries', 'find', 'findIndex'];
var accessorFunctionsHasChain = ['concat', 'slice', 'map', 'filter', 'keys', 'values'];
mutatorFunctions.forEach(function(item) {
    if (arr[item]) {
        setMutator(ArrLike, item, arr[item]);
    }
})
accessorFunctionsHasChain.forEach(function(item) {
    if (arr[item]) {
        setAccessor(ArrLike, item, arr[item], { hasChain: true });
    }
})
accessorFunctions.forEach(function(item) {
    if (typeof ArrLike.prototype[item] === 'function') {
        if (arr[item]) {
            setAccessor(ArrLike, item, arr[item]);
        }
    }
})
ArrLike.prototype.log = function() {
    var arg = arguments;
    Array.prototype.push.call(arg, this);
    console.log.apply(console, arg);
    return this;
};
ArrLike.prototype.getReturn = function() {
    return this.__lastReturn;
};
ArrLike.prototype.setReturn = function(value) {
    this.__lastReturn = value;
    return this;
};
ArrLike.prototype.lastReturn = function(fn) {
    fn.call(this, this.__lastReturn);
    return this;
};
setGenerator(ArrLike, 'chain', function() {
    return new ArrLike(this.__lastReturn);
});

module.exports = ArrLike;