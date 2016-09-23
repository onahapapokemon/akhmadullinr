function isolateIt(arr){
    var result = [];
    for (var i=0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            result.push(arr[i].slice(0,arr[i].length/2) +
                '|' +
                arr[i].slice(arr[i].length/2,arr[i].length));
        }
        if (arr[i].length % 2 !== 0) {
            result.push(arr[i].slice(0,arr[i].length/2) +
                '|' +
                arr[i].slice(arr[i].length/2+1,arr[i].length));
        }
    }
    return result;
}

console.log(isolateIt(["abcd","efgh"]));
console.log(isolateIt(["abcde","fghij"]));
console.log(isolateIt(["1234","56789"]));

//http://www.codewars.com/kata/training-js-number-26-methods-of-arrayobject-map/train/javascript