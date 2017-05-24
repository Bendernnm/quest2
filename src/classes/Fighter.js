class Fighter {
    constructor(name = 'Fighter', power = 1, health = 1) {
        [this.name, this.power, this.health] = [name, power, health];
    }

    setDamage(damage) {
        console.log(`${this.name} is attacked!`);
        this.health -= damage;
        this.infoHealth();
    }

    hit(enemy, point) {
        if (point <= 0) {
            console.log(`${this.name}  missed.`);
        }
        else {
            console.log(`${this.name}  attack the enemy!`);
            enemy.setDamage(((point, power) => point * power)(point, this.power));
        }
    }

    isAlive() {
        return this.health > 0;
    }

    infoHealth() {
        console.log(`${this.name} health = ${this.health}.\n`);
    }

    infoPower() {
        console.log(`${this.name} power = ${this.power}.\n`);
    }

    wonLabel() {
        console.log(`${this.name} won this battle!)`);
    }

    lostLable() {
        console.log(`${this.name} lost this battle!(`);
    }

    static resultLabel(winner, loser) {
        winner.wonLabel();
        loser.lostLable();
    }

    toString() {
        return `${this.name}:\nhealth = ${this.health};\npower = ${this.power}.`;
    }
}
