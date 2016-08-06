function getRandom (min,max) {
    var result = Math.random() * (max-min) + min;
    return +(result.toFixed(0));
}
console.log(getRandom(2,5));
