String.prototype.capitalize = function() {
    var t;
    var capital = this;
    var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var low = 'abcdefghijklmnopqrstuvwxyz';
    for (var i=0;i<low.length;i++) {
        if (capital[0] === low[i]) {
            return t = cap[i] + capital.slice(1);
        }
        else t = capital;
    }
    return t;
}

console.log("the first character of this sentence is not a letter".capitalize());

// https://www.codewars.com/kata/capitalize-first-letter-of-a-string/discuss