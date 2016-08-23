
function make_lazy() {
    var innerFunction = null;
    var arr = [];
    for (var i=0; i<arguments.length; i++) {
        if (typeof arguments[i] == 'function') {
            innerFunction = arguments[i];
        }
        else {
            arr.push(arguments[i]);
        }
    }
    return function() {
        return innerFunction.apply(this,arr);
    };
};

function add (a, b) {
    return a + b;
}

var lazyValue = make_lazy(add, 2, 3);
console.log(lazyValue());