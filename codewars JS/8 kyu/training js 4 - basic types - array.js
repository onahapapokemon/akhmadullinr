function getLength(arr){
    //return length of arr
    return arr.length;
}
function getFirst(arr){
    //return the first element of arr
    return arr[0];
}
function getLast(arr){
    //return the last element of arr
    var last = arr.length-1;
    return arr[last];
}
function pushElement(arr){
    var el=1;
    //push el to arr

    arr.push(1);
    return arr;
}
function popElement(arr){
    //pop an element from arr

    arr.pop(1);
    return arr;
}