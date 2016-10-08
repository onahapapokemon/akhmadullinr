var typer = (function(x) {

    return {
        isNumber: function(x){ return {}.toString.call(x)=== "[object Number]"&& !isNaN(x); },
        isString: function(x) {return {}.toString.call(x) === '[object String]';},
        isArray: function(x) {return {}.toString.call(x) === '[object Array]';},
        isFunction: function(x) {return {}.toString.call(x) === '[object Function]';},
        isDate: function(x) {return {}.toString.call(x) === '[object Date]';},
        isRegExp: function(x) {return {}.toString.call(x) === '[object RegExp]';},
        isBoolean: function(x) {return {}.toString.call(x) === '[object Boolean]';},
        isError: function(x) {return {}.toString.call(x) === '[object Error]';},
        isNull: function(x) {return {}.toString.call(x) === '[object Null]';},
        isUndefined: function(x) {return {}.toString.call(x) === '[object Undefined]';}
    };
}(null));

console.log(typer.isNumber('call'));
