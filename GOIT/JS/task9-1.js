function sumArgs() {
    var reduce = [].reduce.call(arguments, function (a,b)
    {return a+b;});
    return reduce;
}

alert(sumArgs(1,2,3));