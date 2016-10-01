function Calculator() {
    var methods = {
        '-': function(a,b) {
            return a-b;
        },
        '+': function(a,b) {
            return a+b;
        }
    }

    this.calculate = function(str) {
        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!methods[op] || isNan(a) || isNaN(b)) {
            return NaN;
        }
    }

    this.addMethod = function(name,func) {
        methods[name] = func;
    }

}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );