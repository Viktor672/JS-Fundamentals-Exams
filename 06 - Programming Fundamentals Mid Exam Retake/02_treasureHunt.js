function treasureHunt(arr) {
    let treasureStr = arr.shift();
    let treasureArr = treasureStr.split("|");
    let i = 0;
    let action = arr[i];
    while (action !== "Yohoho!") {
        let tokens = arr[i].split(" ");
        let command = tokens.shift();
        if (command === "Loot") {
            for (let j = 0; j < tokens.length; j++) {
                if (!treasureArr.includes(tokens[j])) {
                    treasureArr.unshift(tokens[j]);
                }
            }
        }
        else if (command === "Drop") {
            let index = Number(tokens.shift());
            if (treasureArr[index]) {
                let droppedItemArr = treasureArr.splice(index, 1);
                let droppedItemStr = String(droppedItemArr[0]);
                treasureArr.push(droppedItemStr);
            }
        }
        else if (command === "Steal") {
            let countToReach = Number(tokens.shift());
            let count = 0;
            let stolenItemsArr = [];
            for (let k = treasureArr.length - 1; k >= 0; k--) {
                if (count >= countToReach) {
                    break;
                }
                let curItem = treasureArr.pop();
                stolenItemsArr.unshift(curItem);
                count++;
            }
            console.log(stolenItemsArr.join(", "));
        }
        i++;
        action = arr[i];
    }
    let sumItems = 0;
    for (let l = 0; l < treasureArr.length; l++) {
        sumItems += treasureArr[l].length;
    }
    let averageSumItems = sumItems / treasureArr.length;
    if (treasureArr.length === 0) {
        console.log("Failed treasure hunt.");
    }
    else {
        console.log(`Average treasure gain: ${averageSumItems.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
