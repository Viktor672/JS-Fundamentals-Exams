function counterStrike(arr) {
    let initialEnergy = Number(arr.shift());
    let wonBattlesCount = 0;
    let action = arr.shift();
    while (action != "End of battle") {
        if (action < 0) {
            action = arr.shift();
            continue;
        }
        let enemyPower = Number(action);
        if (initialEnergy - enemyPower < 0) {
            console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${initialEnergy} energy`);
            return;
        }
        initialEnergy -= enemyPower;
        wonBattlesCount++;
        if (wonBattlesCount % 3 == 0) {
            initialEnergy += wonBattlesCount;
        }
        action = arr.shift();
    }
    console.log(`Won battles: ${wonBattlesCount}. Energy left: ${initialEnergy}`);
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);



