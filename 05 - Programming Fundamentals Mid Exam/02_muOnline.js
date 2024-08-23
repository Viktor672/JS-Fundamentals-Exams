function muOnline(string) {
    let arr = string.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;
    for (let i = 0; i < arr.length; i++) {
        roomCount++;
        let newArr = arr[i];
        let splitedNewArr = newArr.split(" ");
        let command = splitedNewArr.shift();
        let amount = Number(splitedNewArr.shift());
        if (command === "potion") {
            if (health+ amount > 100) {
                amount=100-health;
            }
            health += amount;
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`)
        }
        else if (command === "chest") {
            bitcoins += amount;
            console.log(`You found ${amount} bitcoins.`);
        }
        else {
            let monster = command;
            health -= amount;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");