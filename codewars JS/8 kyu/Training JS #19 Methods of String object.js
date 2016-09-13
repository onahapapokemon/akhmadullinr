function alienLanguage(str){
    var words=str.split(' ');
    for (var i=0;i<words.length;i++){
        words[i]=words[i].toUpperCase().slice(0,-1)+words[i].toLowerCase().slice(-1);
    }
    return words.join(' ');
}