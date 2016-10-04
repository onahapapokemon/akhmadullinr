function amIWilson(p) {
    var n = 1;
    for (var i=1; i < p;i++) {
        n *= i;
    }
    var Wilson = (n + 1) / (p * p);
    return Number.isInteger(Wilson);
}

console.log(amIWilson(13));

// http://www.codewars.com/kata/55dc4520094bbaf50e0000cb/solutions/javascript