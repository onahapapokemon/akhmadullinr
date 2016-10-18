var Ghost = function() {
    var arr = ['white','purple','red','yellow'];
    this.color = arr[Math.floor(Math.random()*arr.length)];
};

var ghost = new Ghost();
console.log(ghost.color);

// http://www.codewars.com/kata/53f1015fa9fe02cbda00111a/solutions/javascript