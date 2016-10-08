var isSquare = function(arr){
    var count = 0;
    if (arr.length == 0) return undefined;
    for (var i=0; i < arr.length; i++) {
        if (Number.isInteger(Math.sqrt(arr[i]))) count++;
        else count --;
    }
    if (arr.length == count) return true;
    else return false;
}


console.log(isSquare([1, 4, 7, 16]));

/*
 Write a function that checks whether all elements in an array are square numbers.
 The function should be able to take any number of array elements.

 Your function should return true if all elements in the array are square numbers and false if not.

 An empty array should return undefined. You can assume that all array elements will be positive integers.
 */

// http://www.codewars.com/kata/56853c44b295170b73000007/solutions/javascript/me/best_practice

// Best Practices

/*
 var isSquare = function(arr){
 if (arr.length) {
 return arr.every(function(x) {
 return (Math.sqrt(x)) % 1 === 0;
 });
 }
 else return undefined;
 }
 */