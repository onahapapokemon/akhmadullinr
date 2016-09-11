function cutIt(arr){
    var minEl = arr[0];
    for (var i=0; i < arr.length; i++) {
        if (minEl.length > arr[i].length) minEl = arr[i];
    }
    var newArrLength = minEl.length;
    for (var j=0; j < arr.length; j++) {
        arr[j] = arr[j].slice(0,newArrLength);
    }
    return arr;
}