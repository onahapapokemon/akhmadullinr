function slope(points)
{ var x = points[2] - points[0];
    var y = points[3] - points[1];
    console.log(x,y);
    if (x === 0) return 'undefined';
    return (y/x).toString();
}