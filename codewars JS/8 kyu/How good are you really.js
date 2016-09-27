function betterThanAverage(classPoints, yourPoints) {
    return ((classPoints.reduce(function(a,b){return (a+b)})/classPoints.length) < yourPoints) ? true : false;
}