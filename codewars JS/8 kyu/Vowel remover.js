function shortcut(string){
    var arr = [];
    var vowels = 'aeiou';
    for (var i=0; i <string.length; i++) {
        if (vowels.indexOf(string[i]) == -1) arr.push(string[i]);
    }
    return arr.join('');
}

console.log(shortcut('how are you today?'));

// http://www.codewars.com/kata/5547929140907378f9000039/solutions/javascript