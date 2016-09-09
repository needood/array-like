var arr = require('../var/arr');
var ArrLike = require('./ArrLike.js');
var each = require('./each');
var extendFunction = require('./extendFunction');
var setMutator = extendFunction.setMutator;
var setAccessor = extendFunction.setAccessor;
var mutatorFunctions = ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift','copyWithin','fill'];

var accessorFunctions = ['concat', 'join', 'slice','toString','toLocaleString','some','every','includes','indexOf','lastIndexOf','forEach','map','entries','filter','find','findIndex','keys','values'];

each.call(mutatorFunctions,function(item){
    if(arr[item]){
        setMutator(ArrLike,item,arr[item]);
    }
});
each.call(accessorFunctions,function(item){
    if(arr[item]){
        setAccessor(ArrLike,item,arr[item]);
    }
});

ArrLike.prototype.getReturn = function(){
    return this.__lastReturn;
};
ArrLike.prototype.lastReturn = function(fn){
    fn(this.__lastReturn);
    return this;
};

module.exports = ArrLike;

