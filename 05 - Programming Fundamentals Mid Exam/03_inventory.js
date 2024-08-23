function inventory(arr) {
    let inventory = arr.shift().split(", ");
    let command = arr.shift();
    while (command != "Craft!") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        if (action == "Collect") {
            let item = tokens.shift();
            if ((inventory.includes(item))) {
                command = arr.shift();
                continue;
            }
            else {
                inventory.push(item)
            }
        }
        else if (action == "Drop") {
            let item = tokens.shift();
            if (inventory.includes(item)) {
                let indexOf = inventory.indexOf(item);
                inventory.splice(indexOf, 1);
            }
        }
        else if (action == "Combine Items") {
            let items = tokens.shift().split(":");
            let oldItem = items.shift();
            let newItem = items.shift();
            if (inventory.includes(oldItem)) {
                let indexOf = inventory.indexOf(oldItem);
                inventory.splice(indexOf + 1, 0, newItem);
            }
        }
        else if (action == "Renew") {
            let item = tokens.shift();
            if (inventory.includes(item)) {
                let indexOf = inventory.indexOf(item);
                inventory.splice(indexOf, 1);
                inventory.push(item)
            }
        }
        command = arr.shift();
    }
    console.log(inventory.join(", "));
}
inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);