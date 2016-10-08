function printNumberInterval() {
    var i = 1;
    var timerID = setTimeout(function a() {
        console.log(i);
        timerID = setTimeout(a,100);
        if (i == 20) clearInterval(timerID);
        i++;
    },100);
}

printNumberInterval()