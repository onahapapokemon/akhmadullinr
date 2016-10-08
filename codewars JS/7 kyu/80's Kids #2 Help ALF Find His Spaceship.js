function findSpaceship(map) {
    if (map == undefined || map.indexOf('X') == -1) {
        return "Spaceship lost forever.";
    }
    var arr = map.split('\n').reverse();
    var result = [];
    for (var i=0;i < arr.length; i++) {
        for (var j=0; j <arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                result.push(j);
                result.push(i);
            }
        }
    }
    return result;
}

var string = '..........\n..........\n..........\n.......X..\n..........\n..........';
var string1 = ' ';
console.log(findSpaceship(string));

// 