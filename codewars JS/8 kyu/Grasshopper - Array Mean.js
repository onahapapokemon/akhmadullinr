var findAverage = function (nums) {
    return (nums.reduce(function(a,b) {return (a+b);}))/nums.length;
}