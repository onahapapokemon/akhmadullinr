function factory(color,size) {
    this.color = color || 'green';
    this.size = size || 500;
    this.temp = 25;
    this.vol = 0;
    this.fill = function(vol,temp) {
        this.vol = vol;
        this.temp = temp;
    }
}

var cap1 = new factory('blue',1000);

cap1.fill(300,90);

var stakan = {
    color: 'transparent'
}

cap1.fill.call(stakan,600,60);

console.log(cap1);
console.log(stakan);