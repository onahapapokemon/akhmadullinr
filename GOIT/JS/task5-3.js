var arr = [];
while(true) {
    var a = prompt('введите число');
    if (a === '' || a === null || a === isNaN(a)) {
        break;
    }
    arr.push(+a);
}
var sum = 0;
for (i=0; i < arr.length; i++) {
    sum += arr[i];
}
alert(sum);
