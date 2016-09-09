function stringy(size) {
    var arr = [];
    var even = 1;
    var odd = 0;
    for (var i = 1; i <= size/2; i++) {
        even = even + '';
    }
    for (var j = 1; j <= size/2; j++) {
        odd = odd + '';
    }
    for (var a = 0; a < size; a++) {
        if (a % 2 === 0) {
            arr.push(even);
        }
        else {
            arr.push(odd);
        }
    }
    return arr.join('');
}
console.log(stringy(6));