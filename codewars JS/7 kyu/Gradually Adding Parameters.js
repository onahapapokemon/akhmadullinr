function add() {
    if (arguments.length == 0) return 0;
    var arr = [];
    for (var i=0; i < arguments.length; i++) {
        arr.push(arguments[i]*(i+1));
    }
    return arr.reduce(function(a,b){return a+b;});
}