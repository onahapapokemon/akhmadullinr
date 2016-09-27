
var first12 = "ABCDEFGHIJKLM";
var charCode = "~!@#$%^&*";
var a = first12[~~(first12.length*Math.random())];
var b = first12[~~(first12.length*Math.random())];
var c = ~~(10*Math.random());
var d = ~~(10*Math.random());
var e = ~~(10*Math.random());
var f = ~~(10*Math.random());
var g = charCode[~~(charCode.length*Math.random())];
var h = charCode[~~(charCode.length*Math.random())];
var result = a+b+c+d+e+f+g+h;



console.log(result);

// http://www.codewars.com/kata/training-js-number-36-methods-of-math-kata-authors-lover-random/train/javascript