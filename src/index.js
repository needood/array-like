var extendFunction = require('./core/extendFunction');
var setMutator = extendFunction.setMutator;
var setAccessor = extendFunction.setAccessor;
var setGenerator = extendFunction.setGenerator;
var ArrLike = require("./core/ArrLike");
require("./core/functions");
function Arr() {
    return new ArrLike(arguments);
}
Arr.setMutator = function(name,fn){
    return setMutator(ArrLike,'$'+name,fn);
};
Arr.setAccessor = function(name,fn){
    return setAccessor(ArrLike,'$'+name,fn);
};
Arr.setGenerator = function(name,fn){
    return setGenerator(ArrLike,'$'+name,fn);
};
module.exports = Arr;
