function pattern(n){
    var output="",i,j;
    if (n >0) {
        var result = [];
        var line = Array(n).join(' ');  // создаем пустую строку n элементов
        for (i=1; i <= n; i++) {
            line += (i % 10); // добавляет числа от 1 до 0
        }
        result.push(line); // пушим результат в массив
        for (j=1; j< n; j++) {
            result.push(result[j-1].substring(1) + ' '); // при каждой итерации обрезаем один элемент слева

        }
        output = result.join('\n'); // делаем строку с переносом элементов на новую строку
    }
    return output;
}

/* You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

 Rules/Note:

 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-∞,100]

    */


// http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram/train/javascript