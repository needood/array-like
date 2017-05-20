var likeArray = require("./likeArray");

function ArrLike(arr) {
    Array.prototype.push.apply(this, arr)
}
ArrLike.prototype = {
    constructor: ArrLike,
    length: 0,
    __isArrLike: true,
    version: "1.0.1"
};

module.exports = ArrLike;