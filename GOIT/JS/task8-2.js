function Calculator () {
    var methods = {
        '-': function(a,b) {
            return a - b;
        },
        '+': function(a,b) {
            return a + b;
        }
    };
    this.calculate = function(str) {
        var split = str.split(' ');
        var a = +split[0];
        var op = split[1];
        var b = +split[2];
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](+a,+b);
    }
    this.addMethod = function(name,func) {
        methods[name] = func;
    }
}

var calc = new Calculator;

alert( calc.calculate("3 + 7") );

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("pow", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("2 pow 3");
alert( result ); // 8