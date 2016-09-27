function maxMin(arr1,arr2){
    var result = [], result1 = [];
    for (var i = 0; i < arr1.length; i++) {
        result.push(Math.abs(arr1[i]-arr2[i]));
    }
    var maxValue = Math.max(...result);
    var minValue = Math.min(...result);
    result1.push(maxValue,minValue);
    return result1;
}

console.log(maxMin([1,3,5],[9,8,7]));

