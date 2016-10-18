var FilterNumbers = function(str) {
    return str.split('').filter(c => Number.isInteger(+c) !== true).join('');
}