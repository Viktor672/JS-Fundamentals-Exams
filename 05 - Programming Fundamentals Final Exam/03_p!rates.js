function pirates(arr) {
    let pirateObj = {};
    let action = arr.shift();
    while (action != 'Sail') {
        let tokens = action.split("||");
        let [city, population, gold] = tokens;
        population = Number(population);
        gold = Number(gold);
        if (city in pirateObj) {
            pirateObj[city]['population'] += population;
            pirateObj[city]['gold'] += gold;
        }
        else {
            pirateObj[city] = { population: population, gold: gold };
        }
        action = arr.shift();
    }
    action = arr.shift();
    while (action != "End") {
        let tokens = action.split("=>");
        let command = tokens.shift();
        if (command == "Plunder") {
            let [city, people, gold] = tokens;
            people = Number(people);
            gold = Number(gold);
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            pirateObj[city]['population'] -= people;
            pirateObj[city]['gold'] -= gold;
            if (pirateObj[city]['population'] <= 0 || pirateObj[city]['gold'] <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete pirateObj[city];
            }
        }
        else if (command == 'Prosper') {
            let [city, gold] = tokens;
            gold = Number(gold);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
                action = arr.shift();
                continue;
            }
            pirateObj[city]['gold'] += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${pirateObj[city]['gold']} gold.`);
        }
        action = arr.shift();
    }
    let tuples = Object.entries(pirateObj);
    if (tuples.length > 0) {
        console.log(`Ahoy, Captain! There are ${tuples.length} wealthy settlements to go to:`);
        for (const curCity of tuples) {
            console.log(`${curCity[0]} -> Population: ${curCity[1]['population']} citizens, Gold: ${curCity[1]['gold']} kg`);
        }
    }
    else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);