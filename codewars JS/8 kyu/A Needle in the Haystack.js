function findNeedle(haystack) {
    // your code here
    for (var i=0; i < haystack.length;i++) {
        if (haystack[i] === 'needle') {
            return "found the needle at position " + i;
        }
    }
}


haystack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
console.log(findNeedle(haystack));