function heroesOfCodeAndLogicVII(arr) {
    let numOfHeroes = Number(arr.shift());
    let heroesObj = {};
    for (let i = 0; i < numOfHeroes; i++) {
        let tokens = arr[i].split(" ");
        let [hero, hitPoints, manaPoints] = tokens;
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        heroesObj[hero] = { hitPoints: hitPoints, manaPoints: manaPoints };
    }
    arr.splice(0, numOfHeroes);
    let command = arr.shift();
    while (command != "End") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        if (action == "CastSpell") {
            let [hero, manaPoints, spell] = tokens;
            manaPoints = Number(manaPoints);
            if (manaPoints > heroesObj[hero].manaPoints) {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
            else {
                heroesObj[hero].manaPoints -= manaPoints;
                console.log(`${hero} has successfully cast ${spell} and now has ${heroesObj[hero].manaPoints} MP!`);
            }
        }
        else if (action == "TakeDamage") {
            let [hero, damage, attacker] = tokens;
            damage = Number(damage);
            heroesObj[hero].hitPoints -= damage;
            if (heroesObj[hero].hitPoints > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[hero].hitPoints} HP left!`);
            }
            else {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroesObj[hero];
            }
        }
        else if (action == "Recharge") {
            let [hero, amount] = tokens;
            amount = Number(amount);
            if (amount + heroesObj[hero].manaPoints > 200) {
                amount = 200 - heroesObj[hero].manaPoints;
            }
            heroesObj[hero].manaPoints += amount;
            console.log(`${hero} recharged for ${amount} MP!`);
        }
        else if (action == "Heal") {
            let [hero, amount] = tokens;
            amount = Number(amount);
            if (amount + heroesObj[hero].hitPoints > 100) {
                amount = 100 - heroesObj[hero].hitPoints;
            }
            heroesObj[hero].hitPoints += amount;
            console.log(`${hero} healed for ${amount} HP!`);
        }
        command = arr.shift();
    }
    for (const hero in heroesObj) {
        console.log(hero);
        console.log(`  HP: ${heroesObj[hero].hitPoints}`);
        console.log(`  MP: ${heroesObj[hero].manaPoints}`);
    }
}
heroesOfCodeAndLogicVII(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"]);