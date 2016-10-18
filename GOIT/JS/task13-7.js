function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.setFood = function(amount) {
        food = amount;
    }

    this.addFood = function(amount) {
        if (!this._enabled) {
            throw new Error("холодильник выключен");
        }
        if (food.length + arguments.length >= this._power/100) {
            throw new Error("Нельзя добавить, не хватает мощности");
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };


    this.getFood = function() {
        return food.slice();
    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood );

fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); 