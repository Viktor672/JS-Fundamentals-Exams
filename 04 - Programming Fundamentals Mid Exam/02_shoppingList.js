function shoppingList(arr) {
    let groceriesStr = arr.shift();
    let groceriesArr = groceriesStr.split("!");
    let command = arr.shift();
    while (command != "Go Shopping!") {
        let tokens = command.split(" ");
        let action = tokens.shift();
        if (action === "Urgent") {
            let item = tokens.shift();
            if (!groceriesArr.includes(item)) {
                groceriesArr.unshift(item);
            }
        }
        else if (action === "Unnecessary") {
            let item = tokens.shift();
            if (groceriesArr.includes(item)) {
                let indexOf = groceriesArr.indexOf(item);
                groceriesArr.splice(indexOf, 1);
            }
        }
        else if (action == "Correct") {
            let oldItem = tokens.shift();
            let newItem = tokens.shift();
            if (groceriesArr.includes(oldItem)) {
                let indexOf = groceriesArr.indexOf(oldItem);
                groceriesArr.splice(indexOf, 1);
                groceriesArr.splice(indexOf, 0, newItem);
            }
        }
        else if (action == "Rearrange") {
            let item = tokens.shift();
            if (groceriesArr.includes(item)) {
                let indexOf = groceriesArr.indexOf(item);
                groceriesArr.splice(indexOf, 1);
                groceriesArr.push(item);
            }
        }
        command = arr.shift();
    }
    console.log(groceriesArr.join(", "));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);