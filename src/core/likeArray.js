module.exports = function(obj){
    if(obj == null){
        return false;
    }else if(typeof obj.length === "number" && typeof obj === "object"){
        return true;
    }
};
