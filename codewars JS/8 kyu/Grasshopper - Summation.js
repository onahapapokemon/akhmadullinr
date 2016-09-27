var summation = function (num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        result.push(i);
    }
    var answer = result.reduce(function(sum,current){
        return sum + current;
    });
    return answer;
}