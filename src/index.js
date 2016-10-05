require("./polyfill");
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
Arr.setAccessor = function(name,fn,opt){
    return setAccessor(ArrLike,'$'+name,fn,opt);
};
Arr.setGenerator = function(name,fn){
    return setGenerator(ArrLike,'$'+name,fn);
};
module.exports = Arr;
