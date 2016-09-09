function each(fn){
    for(var i = 0;i<this.length;i++){
        fn(this[i],i);
    }
    return this;
}

module.exports = each;
