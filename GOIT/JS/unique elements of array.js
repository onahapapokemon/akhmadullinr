function getSum(arr) {
    var arr1 = arr.slice();
    arr1.sort( function(a,b) {
        return a - b;
    })
    var ret = [arr1[0]];
    for (var i=1; i < arr1.length; i++) {
        if (arr[i-1] !== arr1[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

console.log(getSum([1,1,1,2,2,3]));