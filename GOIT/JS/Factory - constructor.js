function factory(color) {
    this.color = color || 'green';
    this.size = 600;
    this.name = this.color + this.size;
}

var cap1 = new factory('blue');
var cap2 = new factory();
var cap3 = new factory('purple')

console.log(cap1);
console.log(cap2);
console.log(cap3);