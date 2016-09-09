function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value = +prompt('add number', 0) + this.value;
    };
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value );