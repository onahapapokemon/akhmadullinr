function getSocks(name, socks) {
    var arr = socks.sort();
    if (name == 'Henry') {
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] == arr[i+1]) {
                return [arr[i],arr[i+1]];
            }
        }
    }
    else {
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] !== arr[i+1]) {
                return [arr[i],arr[i+1]];
            }
        }
    }
    return [];
}

// http://www.codewars.com/kata/5662292ee7e2da24e900012f/solutions/javascript