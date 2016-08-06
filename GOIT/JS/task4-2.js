function checkSpam (a) {
    if (a.indexOf('Sex') >=0 || a.indexOf('sex') >= 0) {
        return true;
    }
    else if (a.indexOf('spam') >=0 || a.indexOf('SPAM') >= 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false
console.log(checkSpam('sex vids')); 
