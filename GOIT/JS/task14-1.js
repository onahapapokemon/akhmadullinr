var head = {
    glasses: 1
};

var table = {
    pen: 3
};
table.__proto__ = head;

var bed = {
    sheet: 1,
    pillow: 2
};
bed.__proto__ = table;

var pockets = {
    money: 2000
};
pockets.__proto__ = bed;

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined