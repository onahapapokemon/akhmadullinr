function double (n) {
    return n*2;
}

function add (a,b) {
    return a + b;
}

var make_lazy = function() {
    var operation = arguments[0];
    var args = [].splice.call(arguments,1);
    return function() {
        return operation.apply(arguments, args);
    };
};

var lazy_value = make_lazy(add,2,3);
console.log(lazy_value());

var lazy_double = make_lazy(double,4);
console.log(lazy_double());