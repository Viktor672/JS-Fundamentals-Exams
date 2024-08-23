function plantDiscovery(arr) {
    let number = Number(arr.shift());  //possible error with trimming
    let plantObj = {};
    for (let i = 0; i < number; i++) {
        let tokens = arr[i].split("<->");
        let plant = tokens.shift();
        let rarity = Number(tokens.shift());
        plantObj[plant] = { rarity: [rarity], rating: [] };
    }
    arr.splice(0, number);
    let command = arr.shift();
    while (command != "Exhibition") {
        let tokens = command.split(":");
        let action = tokens.shift();
        let plants = tokens.shift();
        if (action == "Rate") {
            let plantsArr = plants.split("-").map(el => el.trim());
            let plant = plantsArr.shift();
            let rating = Number(plantsArr.shift());
            if (plantObj[plant]) {
                plantObj[plant].rating.push(rating);
            }
            else {
                console.log("error");
            }
        }
        else if (action == "Update") {
            let plantsArr = plants.split("-").map(el => el.trim());
            let plant = plantsArr.shift();
            let newRarity = Number(plantsArr.shift());
            if (plantObj[plant]) {
                plantObj[plant].rarity = [newRarity];
            }
            else {
                console.log("error");
            }
        }
        else if (action == "Reset") {
            let plantsArr = plants.split("-").map(el => el.trim());
            let plant = plantsArr.shift();
            if (plantObj[plant]) {
                plantObj[plant].rating = [];
            }
            else {
                console.log("error");
            }
        }
        command = arr.shift();
    }
    console.log("Plants for the exhibition:");
    for (const key in plantObj) {
        let sumRating = 0;
        let count = plantObj[key].rating.length;
        let averageRating = 0;
        for (const curNum of plantObj[key].rating) {
            sumRating += curNum
        }
        if (count == 0) {
            averageRating = 0;
        }
        else {
            averageRating = sumRating / count;
        }
        console.log(`- ${key}; Rarity: ${plantObj[key].rarity}; Rating: ${(averageRating).toFixed(2)}`);
    }
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
    );
