function sortIt(arr) {
    var arr1 = arr.slice();
    arr1.sort(function cond(a,b) {
        var acount = 0;
        var bcount = 0;
        for (var x of arr) {
            if (x==a) acount++;
            if (x==b) bcount++;
        }
        if (acount==bcount) return b-a;
        else return acount-bcount;
    });
    return arr1;
}

console.log(sortIt([1,1,1,2,2,3]));



