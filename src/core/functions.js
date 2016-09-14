var arr = require('../var/arr');
var ArrLike = require('./ArrLike.js');
var each = require('./each');
var extendFunction = require('./extendFunction');
var setMutator = extendFunction.setMutator;
var setAccessor = extendFunction.setAccessor;
var mutatorFunctions = ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift','copyWithin','fill'];

var accessorFunctions = ['concat', 'join', 'slice','toString','toLocaleString','some','every','includes','indexOf','lastIndexOf','forEach','map','entries','filter','find','findIndex','keys','values'];

each(mutatorFunctions,function(item){
    if(arr[item]){
        setMutator(ArrLike,item,arr[item]);
    }
});
each(accessorFunctions,function(item){
    if(arr[item]){
        setAccessor(ArrLike,item,arr[item]);
    }
});

ArrLike.prototype.log = function(){
    var arg = arguments;
    Array.prototype.push.call(arg,this);
    console.log.apply(console,arg);
    return this;
};
ArrLike.prototype.getReturn = function(){
    return this.__lastReturn;
};
ArrLike.prototype.setReturn = function(value){
    this.__lastReturn = value;
    return this;
};
ArrLike.prototype.lastReturn = function(fn){
    fn.call(this,this.__lastReturn);
    return this;
};

module.exports = ArrLike;

