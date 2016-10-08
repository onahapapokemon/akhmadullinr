function isTriangular(t) {
    var a = 8*t + 1;
    var b = Math.sqrt(a);
    var n = (b-1)/2;
    if (Number.isInteger(n) !== true) return false;
    else return true;
}