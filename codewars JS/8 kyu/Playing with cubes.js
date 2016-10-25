function Cube(n) {
    this.side = n || 0;

    this.getSide = function () {
        return this.side;
    };
    this.setSide = function (n) {
        if (!isNaN(n) === true) {
            this.side = Math.abs(n);
        }
    }
}

