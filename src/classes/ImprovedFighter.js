class ImprovedFighter extends Fighter {
    hit(enemy, point) {
        super.hit(enemy, point * 2);
    }

    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}
