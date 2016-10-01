function suffle(arr) {
    return arr.sort(function(a,b){return Math.random(a) - Math.random(b);});
}

console.log(suffle([1,2,4,5,6,7,8,9,10]));

/* оптимальное решение

 function suffle(arr) {
    for (var i = arr.length-1; i>=0; i--) {
        var randomIndex = Math.floor(Math.random() * (i+1));
        var itemIndex = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = itemIndex;
     }
    return arr;
 }
 */

// Write a function suffle(arr) to shuffle an array.

