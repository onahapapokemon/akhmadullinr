function solution(number){
    var result = [];
    for (var i=1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) result.push(i)
    }
    return (result.length > 0) ? result.reduce(function(a,b){return a+b;}) : 0;
}

