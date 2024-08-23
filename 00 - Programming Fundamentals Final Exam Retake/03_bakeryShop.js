function bakeryShop(arr) {
    let foodObj = {};
    let soldFoodObj = {};
    let action = arr.shift();
    while (action != "Complete") {
        let tokens = action.split(" ");
        let [command, quantity, food] = tokens;
        quantity = Number(quantity);
        if (quantity <= 0) {
            action = arr.shift();
            continue;
        }
        if (command == "Receive") {
            if (food in foodObj) {
                foodObj[food] += quantity;
            }
            else {
                foodObj[food] = {};
                foodObj[food] = quantity;
            }
        }
        else if (command == "Sell") {
            if (!(food in foodObj)) {
                console.log(`You do not have any ${food}.`);
            }
            else {
                if (quantity > foodObj[food]) {
                    console.log(`There aren't enough ${food}. You sold the last ${foodObj[food]} of them.`);
                    soldFoodObj[food] = {};
                    soldFoodObj[food] = foodObj[food];
                    delete foodObj[food];
                }
                else {
                    foodObj[food] -= quantity;
                    console.log(`You sold ${quantity} ${food}.`);
                    soldFoodObj[food] = {};
                    soldFoodObj[food] = quantity;
                    if (foodObj[food] <= 0) {
                        delete foodObj[food];
                    }
                }
            }
        }
        action = arr.shift();
    }
    for (const key in foodObj) {
        console.log(`${key}: ${foodObj[key]}`);
    }
    let sumOfSoldFood = 0;
    for (const key in soldFoodObj) {
        sumOfSoldFood += soldFoodObj[key];
    }
    console.log(`All sold: ${sumOfSoldFood} goods`);
}
bakeryShop([
    'Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
  ]);