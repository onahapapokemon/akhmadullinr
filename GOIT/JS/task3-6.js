function pow(x,n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
var x = prompt('x?');
var n = prompt('n?');
if (n <= 0) {
    alert('Степень ' + n + ' не поддерживается');
}
else {
    alert(pow(x,n) );
}
