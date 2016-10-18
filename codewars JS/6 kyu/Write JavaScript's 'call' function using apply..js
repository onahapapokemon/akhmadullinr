Function.prototype.call = function() {
    var args = Array.prototype.slice.apply(arguments,[1]);
    return this.apply(arguments[0], args);
}