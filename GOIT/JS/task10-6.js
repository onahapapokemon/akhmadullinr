function checkType(data) {
    if (typeof data === 'string') return 'string';
    else if (typeof data === 'number') return 'number';
    else if (typeof data === 'boolean') return 'boolean';
    else if (typeof data === 'function') return 'function';
    else if (typeof data === 'undefined') return 'undefined';
}

console.log(checkType(123));
console.log(checkType('aba'));
console.log(checkType(true));

/* более оптимальный вариант
 function checkType(data) {
  return typeof data;
  }

 */

/* Write a JavaScript function which accepts an argument and returns the type.
Note: There are six possible values that typeof returns: object, boolean, function,
number, string, and undefined.
 */