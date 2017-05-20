function each(list, fn) {
    Array.prototype.forEach.apply(list, fn)
    return list;
}

module.exports = each;