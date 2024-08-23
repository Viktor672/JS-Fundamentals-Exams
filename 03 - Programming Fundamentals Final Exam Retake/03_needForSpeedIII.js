function needForSpeedIII(arr) {
    let numOfCars = Number(arr.shift());
    let carObj = {};
    for (let i = 0; i < numOfCars; i++) {
        let tokens = arr[i].split("|");
        let [car, mileage, fuel] = tokens;
        mileage = Number(mileage);
        fuel = Number(fuel);
        carObj[car] = { mileage: mileage, fuel: fuel };
    }
    arr.splice(0, numOfCars);
    let command = arr.shift();
    while (command != "Stop") {
        let tokens = command.split(" : ");
        let action = tokens.shift();
        if (action === "Drive") {
            let [car, distance, fuel] = tokens;
            distance = Number(distance);
            fuel = Number(fuel);
            if (carObj[car]) {
                if (fuel > carObj[car].fuel) {
                    console.log("Not enough fuel to make that ride");
                }
                else {
                    carObj[car].mileage += distance;
                    carObj[car].fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (carObj[car].mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete carObj[car];
                    }
                }
            }
        }
        else if (action === "Refuel") {
            let [car, fuel] = tokens;
            fuel = Number(fuel);
            if (carObj[car]) {
                if (carObj[car].fuel + fuel > 75) {
                    fuel = 75 - carObj[car].fuel;
                }
                carObj[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        }
        else if (action == "Revert") {
            let [car, kilometers] = tokens;
            kilometers = Number(kilometers);
            if (carObj[car]) {
                carObj[car].mileage -= kilometers;
                if (carObj[car].mileage < 1000) {
                    carObj[car].mileage = 10000;
                }
                else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
            }
        }
        command = arr.shift();
    }
    for (const car in carObj) {
        console.log(`${car} -> Mileage: ${carObj[car].mileage} kms, Fuel in the tank: ${carObj[car].fuel} lt.`);
    }
}
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);
