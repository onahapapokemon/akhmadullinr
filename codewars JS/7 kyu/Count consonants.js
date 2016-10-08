function consonantCount(str) {
    var cons = 'BCDFGHJKLMNPQRSTVWXYZ';
    var count = 0;
    var str1 = str.toUpperCase();
    for (var i=0; i<str1.length;i++) {
        if (cons.indexOf(str1[i]) !== -1) {
            count += 1;
        }
    }
    return count;
}

// http://www.codewars.com/kata/564e7fc20f0b53eb02000106/solutions/javascript