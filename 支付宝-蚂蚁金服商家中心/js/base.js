window.lst = {};

lst.transitionend = function (obj,callback) {
    obj.addEventListener('transitionend',callback);
    obj.addEventListener('webkitTransitionEnd',callback);

};