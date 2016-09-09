function symmetricPoint(p, q) {
    var result = [];

    for (var i=0; i < p.length; i++) {
        result.push(q[i]+(q[i]-p[i]));
    }
    return result;
}
console.log(symmetricPoint([2,6], [-2,-6]));