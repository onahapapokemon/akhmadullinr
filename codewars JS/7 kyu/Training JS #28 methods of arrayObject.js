function mirrorImage(arr){
    for(var i=0;i<arr.length-1;i++){
        if(arr[i].toString().split('').reverse().join('')===arr[i+1].toString())return [arr[i],arr[i+1]]
    }
    return [-1,-1]
}

// https://www.codewars.com/kata/training-js-number-28-methods-of-arrayobject-every-and-some/train/javascript


//
// alternative
//
// function mirrorImage(arr) {
// var a = -1;
// var b = -1;
// arr.some((x, i) => {
//     a = arr[i];
// b = arr[i + 1];
// return String(a) === String(b).split('').reverse().join('');
// })
//return b == null? [-1, -1] : [a, b];
// }