function binRota(arr){
    var res = [];
    for (var i=0;i<arr.length; i++) {
        if (i % 2) {
            for (var j=arr[i].length-1;j>=0;j--) {
                res.push(arr[i][j]);
            }
        }
        else {
            for (var t=0;t<arr[i].length;t++) {
                res.push(arr[i][t]);
            }
        }
    }
    return res;
}

// optimal solution

/* function binRota(arr) {
    return arr.reduce(function(a, b, index) {
        return (index % 2 === 0) ? a.concat(b) : a.concat(b.reverse());
    });
}

*/

// https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/solutions/javascript