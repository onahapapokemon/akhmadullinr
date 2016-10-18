function maskify(cc) {
    var result = cc.slice(-4);
    var mask = '#';
    for (var i = 0; i < cc.length-4; i++) {
        result = mask + result;
        console.log(result);
    }
    return result;
}