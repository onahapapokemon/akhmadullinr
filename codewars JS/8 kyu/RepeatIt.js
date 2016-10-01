var repeatIt = function(str, n) {
    if (typeof str !== 'string') return "Not a string";
    var arr = [];
    for (var i=0; i < n; i++) {
        arr.push(str);
    }
    return arr.join('');
}


// http://www.codewars.com/kata/557af9418895e44de7000053/solutions/javascript

/* оптимальный вариант

 var repeatIt = function(str, n) {
    if (typeof str !== 'string') return "Not a string";
    var a = '';
    for (var i=0; i < n; i++) {
        a += str;
     }
    return a;
 }


 console.log(repeatIt('Hello',4));

 console.log(repeatIt('*',3));

 */