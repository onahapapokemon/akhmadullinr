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

    this.filterFood = function(filter) {
        return food.filter(filter);
    }

    this.removeFood = function(item) {
        if (food.indexOf(item) !== -1) return food.pop(item);
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды");
alert( fridge.getFood().length );

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    alert( item.title ); // сок, зелень
    fridge.removeFood(item);
});

alert( fridge.getFood().length );
