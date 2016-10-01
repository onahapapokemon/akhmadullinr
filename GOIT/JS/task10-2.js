function getMaxNumber(arr) {
    arr.sort(function(a,b) {
        if (a < b) return a;});
    return arr[0];
}



console.log(getMaxNumber([1,30,40,2,7]));
console.log(getMaxNumber([1,15,-20,2,-7]));

/* альтернатива
 function getMaxNumber(arr) {
    var max = arr[0];
    for (var i=0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        }
    return max;
        }
 */

/* альтернатива 2
 function getMaxNumber(arr) {
    return Math.max.apply(null,arr);
}

 */