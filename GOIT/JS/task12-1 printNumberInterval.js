function printNumberInterval() {
    var i = 1;
    var timerID = setInterval(function() {
        console.log(i);
        if (i == 20) clearInterval(timerID);
        i++;
    },100);
}

printNumberInterval()

// https://learn.javascript.ru/settimeout-setinterval