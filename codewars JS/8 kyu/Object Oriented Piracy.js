function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function() {
    return (this.draft - 1.5 * this.crew >= 20) ? true : false;
}

// http://www.codewars.com/kata/54fe05c4762e2e3047000add/solutions/javascript