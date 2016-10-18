const generate = length => {
    var result = [];
    for (var i=0;i<length;i++) {
        result.push(Math.round(Math.random()));
    }
    return result.join('');
};

// http://www.codewars.com/kata/genetic-algorithm-series-number-1-generate/train/javascript