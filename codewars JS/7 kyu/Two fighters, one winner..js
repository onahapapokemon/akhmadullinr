function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    while((fighter1.health || fighter2.health) >= 0) {
        if(fighter1.name == firstAttacker) {

            fighter2.health -= fighter1.damagePerAttack;

            if(fighter2.health <= 0) {
                return fighter1.name;
            }

            fighter1.health -= fighter2.damagePerAttack;

            if(fighter1.health <= 0) {
                return fighter2.name;
            }
        }
        if(fighter2.name == firstAttacker) {

            fighter1.health -= fighter2.damagePerAttack;

            if(fighter1.health <= 0) {
                return fighter2.name;
            }

            fighter2.health -= fighter1.damagePerAttack;

            if(fighter2.health <= 0) {
                return fighter1.name;
            }
        }
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), 'Lew'));