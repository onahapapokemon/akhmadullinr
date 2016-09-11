function giveMeFive(obj){
    var arr = [];
    for (var key in obj) {
        if (key.length == 5) {
            arr.push(key);
        }
        if (obj[key].length == 5) {
            arr.push(obj[key]);
        }
    }
    return arr;
}

console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({Pears:"than",apple:"sweet"}))