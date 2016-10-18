function XO(str) {
    var str1 = str.toLowerCase();
    var x = 0,y = 0;
    console.log(str1);
    if (str1.indexOf('x') == -1 && str1.indexOf('o') == -1) return true;
    for (var i=0;i<str1.length;i++){
        if (str1[i] == 'x') x++;
        else if (str1[i] == 'o') y++;
    }
    return (x == y) ? true : false;
}