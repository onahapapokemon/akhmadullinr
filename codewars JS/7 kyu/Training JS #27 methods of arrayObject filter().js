function countGrade(scores){
    var result = {
        S: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        X: 0
    };
    result.S = scores.filter( function(x) {
        if (x == 100) return x;
    }).length;

    result.A = scores.filter( function(x) {
        if (x >= 90 && x < 100) return x;
    }).length;

    result.B = scores.filter( function(x) {
        if (x >= 80 && x < 90) return x;
    }).length;

    result.C = scores.filter( function(x) {
        if (x >= 60 && x < 80) return x;
    }).length;

    result.D = scores.filter( function(x) {
        if (x > 0 && x < 60) return x;
        if (x == 0) return x == 0;
    }).length;

    result.X = scores.filter( function(x) {
        if (x == -1) return x;
    }).length;

    return result;
}

//http://www.codewars.com/kata/training-js-number-27-methods-of-arrayobject-filter/train/javascript