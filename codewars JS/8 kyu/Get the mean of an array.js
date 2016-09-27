function getAverage(marks){
    var result = marks.reduce(function(a,b) {
        return (a+b);
    });
    return Math.floor(result/marks.length);
}

