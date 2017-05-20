var objectAssign = require("object-assign");
var likeArray = require("./likeArray");

function ArrLike(arr) {
    objectAssign(this, arr);
    this.length = arr.length;
}
ArrLike.prototype = {
    constructor: ArrLike,
    length: 0,
    __isArrLike: true,
    version: "1.0.1"
};

module.exports = ArrLike;