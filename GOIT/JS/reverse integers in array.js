function mirrorImage(arr){
    var a = 0, b = 0;

    var arr1 = arr.map (function (x) {
        x = x + '';
        var i = x.length,
            o = '';
        while (i > 0) {
            o += x.substring(i - 1, i);
            i--;
        }
        return +o;
    })

    console.log(arr1);
} 