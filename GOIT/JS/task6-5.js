function isPal(string) {
    var a = string.toLowerCase();
    string = a;
    var arr = string.split('');
    arr.reverse();
    var pal = arr.join('')
    if (string == pal) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPal('Anna')); // true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
