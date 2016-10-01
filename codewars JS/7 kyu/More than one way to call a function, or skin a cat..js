function sum(a,b){
    if (arguments.length > 1) return arguments[0] + arguments[1];
    return function(b) {
        return a + b;
    };
}