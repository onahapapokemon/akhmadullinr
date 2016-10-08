function formDate(data) {

    var dd = data.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = data.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = data.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

function formatDate(date) {
    if ({}.toString.call(date) === '[object Date]') {
        return formDate(date);
    }
    else if (Array.isArray(date) === true) {
        var arr = new Date(date[0],date[1],date[2]);
        return formDate(arr);
    }
    else if ({}.toString.call(date) === '[object String]') {
        var string = new Date(date.split('-').join(' '));
        return formDate(string);
    }
    else if ({}.toString.call(date) === '[object Number]') {
        var number = new Date(date*1000);
        return formDate(number);
    }
}



console.log(formatDate('2011-10-02'));
console.log(formatDate([2014, 0, 1]));
console.log(formatDate(1234567890));
console.log(formatDate(new Date(2014, 0, 14)));

// https://learn.javascript.ru/class-instanceof

