
var textEven = ' #';
var textOdd = '# ';
var textWidth = 8;
for (var i = 1; i < textWidth / 2; i++) {
    textEven = textEven + ' #';
}
for (var j = 1; j < textWidth / 2; j++) {
    textOdd = textOdd + '# ';
}
for (var a = 0; a < textWidth; a++) {
    if (a % 2 === 0) {
        console.log(textEven);
    }
    else {
        console.log(textOdd);
    }
}