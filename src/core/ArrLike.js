var each = require("./each");
var likeArray = require("./likeArray");
var isArray = require("./isArray");
function ArrLike(arr) {
    function makeArray(arr,self){
        each(arr,function(item){
            self.push(item);
        });
    }
    makeArray(arr,this);
    return this;
}
ArrLike.prototype = {
    constructor: ArrLike,
    length: 0,
    __isArrLike:true,
    version:"1.0"
};

module.exports = ArrLike;
