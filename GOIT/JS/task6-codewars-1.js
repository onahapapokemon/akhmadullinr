function getMissingElement (superImportantArray) {
    var numbers = superImportantArray.sort();
    var missing = [];

    for ( var i = 1; i < numbers.length; i++ ) {

        if ( (numbers[i] - numbers[i-1]) != 1 ) {
            missing.push(numbers[i-1] + 1);

        }
    }
    var str = missing.join('');
    return +str;
}
