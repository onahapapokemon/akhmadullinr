function addLength(str){
//start-here
    var arr = str.split(' ');
    for (var i=0; i < arr.length; i++) {
        arr[i] += ' ' + arr[i].length;
    }
    return arr;
}

console.log(addLength('apple ban'));
