function topSecret(str){
    var chars = str.split("");
    for(var i = 0; i < chars.length; i++) {
        var code = chars[i].charCodeAt(),
            char = String.fromCharCode(code - 3);
        if((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
            switch(char) {
                case '>': chars[i] = 'X'; break;
                case '?': chars[i] = 'Y'; break;
                case '@': chars[i] = 'Z'; break;
                case '^': chars[i] = 'x'; break;
                case '_': chars[i] = 'y'; break;
                case '`': chars[i] = 'z'; break;
                default:  chars[i] = char;
            }
        }
    }
    return chars.join("");
}

console.log(topSecret("Khoor Zruog!"));