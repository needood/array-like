!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Arr=t()}}(function(){return function t(e,r,n){function o(u,c){if(!r[u]){if(!e[u]){var s="function"==typeof require&&require;if(!c&&s)return s(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=r[u]={exports:{}};e[u][0].call(a.exports,function(t){var r=e[u][1][t];return o(r?r:t)},a,a.exports,t,e,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(t,e,r){function n(t){function e(t,e){o.call(t,function(t){e.push(t)})}return e(t,this),this}var o=t("./each");t("./likeArray"),t("./isArray");n.prototype={constructor:n,length:0,__isArrLike:!0,version:"1.0"},e.exports=n},{"./each":2,"./isArray":5,"./likeArray":6}],2:[function(t,e,r){function n(t){for(var e=0;e<this.length;e++)t(this[e],e);return this}e.exports=n},{}],3:[function(t,e,r){function n(t,e,r){t.prototype[e]=function(){return this.__lastReturn=r.apply(this,arguments),this}}function o(t,e,r){t.prototype[e]=function(){return this.__lastReturn=r.apply(u.slice.call(this),arguments),this}}function i(t,e,r){t.prototype[e]=function(){var t=r.apply(this,arguments);return t.__lastReturn=this,t}}var u=t("../var/arr");e.exports={setMutator:n,setAccessor:o,setGenerator:i}},{"../var/arr":8}],4:[function(t,e,r){var n=t("../var/arr"),o=t("./ArrLike.js"),i=t("./each"),u=t("./extendFunction"),c=u.setMutator,s=u.setAccessor,f=["pop","push","reverse","shift","sort","splice","unshift","copyWithin","fill"],a=["concat","join","slice","toString","toLocaleString","some","every","includes","indexOf","lastIndexOf","forEach","map","entries","filter","find","findIndex","keys","values"];i.call(f,function(t){n[t]&&c(o,t,n[t])}),i.call(a,function(t){n[t]&&s(o,t,n[t])}),o.prototype.getReturn=function(){return this.__lastReturn},o.prototype.lastReturn=function(t){return t.call(this,this.__lastReturn),this},e.exports=o},{"../var/arr":8,"./ArrLike.js":1,"./each":2,"./extendFunction":3}],5:[function(t,e,r){e.exports=function(t){return!(!Array.isArray||!Array.isArray(t))||"[object Array]"===Object.prototype.toString.call(t)}},{}],6:[function(t,e,r){e.exports=function(t){return null!=t&&("number"==typeof t.length&&"object"==typeof t||void 0)}},{}],7:[function(t,e,r){function n(){return new s(arguments)}var o=t("./core/extendFunction"),i=o.setMutator,u=o.setAccessor,c=o.setGenerator,s=(t("./core/each"),t("./core/ArrLike"));t("./core/functions"),n.setMutator=function(t,e){return i(s,"$"+t,e)},n.setAccessor=function(t,e){return u(s,"$"+t,e)},n.setGenerator=function(t,e){return c(s,"$"+t,e)},e.exports=n},{"./core/ArrLike":1,"./core/each":2,"./core/extendFunction":3,"./core/functions":4}],8:[function(t,e,r){e.exports=new Array},{}]},{},[7])(7)});
//# sourceMappingURL=bundle.js.map
