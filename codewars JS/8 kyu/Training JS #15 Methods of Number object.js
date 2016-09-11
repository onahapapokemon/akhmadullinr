
function howManySmaller(arr,n){
    var count = 0;
    arr = arr.map( function(x) {
        return x.toFixed(2);
    });
    for (var i=0; i < arr.length; i++) {
        if (arr[i] < n) count++;
    }
    return count++;
}

console.log(howManySmaller([1.234,1.235,1.228],1.24));
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19));