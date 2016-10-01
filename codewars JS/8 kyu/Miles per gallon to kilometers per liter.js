function converter (mpg) {
    result = ((mpg/4.54609188 )/(1/1.609344)).toFixed(2);
    if (result.slice(-1) == '0') {
        return +result.slice(0,-1);
    }
    else if (result.slice(-2) == '00') {
        return +result.slice(0,-2);
    }
    return +result;
}