module.exports = function(arr){
    if(Array.isArray && Array.isArray(arr)){
        return true;
    }else if(Object.prototype.toString.call(arr) === '[object Array]'){
        return true;
    }else{
        return false;
    }
};
