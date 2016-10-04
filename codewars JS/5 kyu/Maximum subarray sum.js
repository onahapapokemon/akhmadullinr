var maxSequence = function(arr){
    var maxSum = 0, partSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partSum += arr[i];
        maxSum = Math.max(maxSum,partSum);
        if (partSum < 0) partSum = 0;
    }
    return maxSum;
}

/* The maximum sum subarray problem consists
in finding the maximum sum of a contiguous subsequence in an array or list of integers
 */

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions/javascript