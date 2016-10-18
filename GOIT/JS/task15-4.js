function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function() {
    return (this.draft - 1.5 * this.crew >= 20) ? true : false;
}