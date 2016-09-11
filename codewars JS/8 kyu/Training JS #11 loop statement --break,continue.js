function grabDoll(dolls){
    var bag=[];
    for (var i = 0; i < dolls.length; i++) {
        if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
            if (bag.length == 3) break;
            else if (!dolls[i]) continue;
            else bag.push(dolls[i]);
        }
    }
    return bag;