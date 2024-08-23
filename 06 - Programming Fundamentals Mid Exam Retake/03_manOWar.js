function manOWar(arr) {
    let pirateShipStatusString = arr.shift();
    let warShipStatusString = arr.shift();
    let maxHealth = Number(arr.shift());
    let pirateShipStatusArr = pirateShipStatusString.split(">").map(x => Number(x));
    let warShipStatusArr = warShipStatusString.split(">").map(x => Number(x));

    for (let i = 0; i < pirateShipStatusArr.length; i++) {
        if (pirateShipStatusArr[i] > maxHealth) {
            pirateShipStatusArr[i] = maxHealth;
        }
    }
    for (let i = 0; i < warShipStatusArr.length; i++) {
        if (warShipStatusArr[i] > maxHealth) {
            warShipStatusArr[i] = maxHealth;
        }
    }
    let i = 0;
    let action = arr[i];
    while (action != "Retire") {
        let count = 0;
        if (action === "Status") {
            for (let j = 0; j < pirateShipStatusArr.length; j++) {
                if (pirateShipStatusArr[j] < 0.2 * maxHealth) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
        else {
            let tokens = action.split(" ");
            let command = tokens.shift();
            if (command === "Fire") {
                let index = Number(tokens.shift());
                let damage = Number(tokens.shift());
                if (warShipStatusArr[index]) {
                    warShipStatusArr[index] -= damage;
                    if (warShipStatusArr[index] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
            }
            else if (command === "Defend") {
                let startIndex = Number(tokens.shift());
                let endIndex = Number(tokens.shift());
                let damage = Number(tokens.shift());
                if (pirateShipStatusArr[startIndex] && pirateShipStatusArr[endIndex]) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateShipStatusArr[j] -= damage;
                        if (pirateShipStatusArr[j] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
            }
            else if (command === "Repair") {
                let index = Number(tokens.shift());
                let health = Number(tokens.shift());
                if (pirateShipStatusArr[index]) {
                    pirateShipStatusArr[index] += health;
                    if (pirateShipStatusArr[index] > maxHealth) {
                        pirateShipStatusArr[index] = maxHealth;
                    }
                }
            }
        }
        i++;
        action = arr[i];
    }
    let sumPirateShip = 0;
    let sumWarShip = 0;
    for (let k = 0; k < pirateShipStatusArr.length; k++) {
        sumPirateShip += pirateShipStatusArr[k];
    }
    for (let k = 0; k < warShipStatusArr.length; k++) {
        sumWarShip += warShipStatusArr[k];
    }
    console.log(`Pirate ship status: ${sumPirateShip}`);
    console.log(`Warship status: ${sumWarShip}`);
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);