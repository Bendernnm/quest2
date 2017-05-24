let fight = (fighter, improvedFighter, ...points) => {
    let index = 0;
    for (item of points) {
        console.log("Hit", (++index));
        fighter.hit(improvedFighter, item);
        improvedFighter.hit(fighter, item);

        if ((!fighter.isAlive()) && (!improvedFighter.isAlive())) {
            console.log('All fighters dead...');
        } else {
            if (!fighter.isAlive()) {
                Fighter.resultLabel(improvedFighter, fighter);
                break;
            }

            if (!improvedFighter.isAlive()) {
                Fighter.resultLabel(fighter, improvedFighter);
                break;
            }
        }
    }

    if ((fighter.isAlive()) && (improvedFighter.isAlive())) {
        console.log('The battle is not end...');
    }
};

let monster = new Fighter('Monster', 2, 40);
let knight = new ImprovedFighter('Knight', 1, 50);

console.log("First battle!");
fight(monster, knight, 10, 5);

monster = new Fighter('Monster', 2, 40);
knight = new ImprovedFighter('Knight', 1, 50);

console.log("\nSecond battle!");
fight(monster, knight, 10, 10);

monster = new Fighter('Monster', 2, 40);
knight = new ImprovedFighter('Knight', 1, 40);

console.log("\nThird battle!");
fight(monster, knight, 20);

monster = new Fighter('Monster', 2, 40);
knight = new ImprovedFighter('Knight', 1, 30);

console.log("\nFourth battle!");
fight(monster, knight, 5, 5, 7);