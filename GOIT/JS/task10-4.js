function firstLetter(str) {
    var arr = str.split(' '),arr1 = [];
    for (var i=0; i<arr.length; i++) {
        arr1.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1));
    }
    return arr1.join(' ');
}

console.log(firstLetter('the quick brown fox'));


/* альтернатива
 function firstLetter(str) {
    var words = str.split(' ');
    return words.map(function(a) {
        return a[0].toUpperCase() + a.slice(1);
    }).join(' ');
  }
 */

/* Write a JavaScript function that accepts a string as a parameter and converts
the first letter of each word of the string in upper case. Go to the editor

 Example string: the quick brown fox
 Expected Output: The Quick Brown Fox
 */

