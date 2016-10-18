function diffBig2(arr) {
    var max1 = Math.max.apply(null,arr);
    arr.splice(arr.indexOf(max1),1);
    var max2 = Math.max.apply(null,arr);
    return max1 - max2;
}