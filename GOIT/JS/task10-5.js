function longestWord(str) {
    var arr = str.split(' ').sort(function(a,b) {
        return b.length - a.length;});
    return arr[0];
}

console.log(longestWord('Web Development Tutorial'));

/* альтернатива

 function longestWord(str) {
    var arr = str.split(' ');
    var longestWord, max = 0;
    for (var i=0; i< arr.length;i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;
  }

 */

/* Write a JavaScript function that accepts a string as a parameter
and find the longest word within the string. Go to the editor

 Example string: Web Development Tutorial

 Expected Output: Development

*/
