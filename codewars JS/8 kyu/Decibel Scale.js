function dBScale(intensity) {
    var decibel = 10*Math.log10(intensity/(Math.pow(10,-12)));
    return decibel;
}

// http://www.codewars.com/kata/decibel-scale/train/javascript