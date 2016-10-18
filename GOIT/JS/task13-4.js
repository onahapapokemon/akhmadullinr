function Machine(power) {
    this._power = power; // (1)
    this._enabled = false;
    this.enable = function () {
        this._enabled = true;
    };
    this.disable = function () {
        this._enabled = false;
    }
}

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var timerId;

    this.isRunning = function() {
        return !!timerId;
    };

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this.run = function() {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});