function divide(weight){
    var a = 1, b = 1;
    for (var i = weight-1; i>0; i--) {
        if (i % 2 == 0) {
            a = i;
            b = weight - a;
        }
    }
    console.log(a,b);
    if (a % 2 == 0 && b % 2 == 0) return true;
    return false;
}