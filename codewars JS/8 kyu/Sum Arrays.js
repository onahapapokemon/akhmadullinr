function sum (numbers) {
    "use strict";
    if (numbers.length == 0) return  0;
    return numbers.reduce(function(a,b) { return a+b;});
};