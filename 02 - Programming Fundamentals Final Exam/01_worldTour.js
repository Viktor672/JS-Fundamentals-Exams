function worldTour(arr) {
    let stopsStr = arr.shift();
    let command = arr.shift();
    while (command !== "Travel") {
        let tokens = command.split(":");
        let trimmedTokens = tokens.map(el => el.trim());
        let action = trimmedTokens.shift();
        if (action == "Add Stop") {
            let index = Number(trimmedTokens.shift());
            let string = trimmedTokens.shift();
            if (stopsStr[index]) {
                stopsStr = stopsStr.substring(0, index) + string + stopsStr.substring(index);
            }
        }
        else if (action == "Remove Stop") {
            let startIndex = Number(trimmedTokens.shift());
            let endIndex = Number(trimmedTokens.shift());
            if (stopsStr[startIndex] && stopsStr[endIndex] && startIndex<=endIndex) {
                stopsStr = stopsStr.substring(0, startIndex) + stopsStr.substring(endIndex + 1);
            }
        }
        else {
            let oldString = trimmedTokens.shift();
            let newString = trimmedTokens.shift();
            if (oldString != newString) {
                stopsStr = stopsStr.split(oldString).join(newString);
            }
        }
        console.log(stopsStr);
        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stopsStr}`);
}
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
    );