function activationKeys(arr) {
    let activationKey = arr.shift();
    let command = arr.shift();
    while (command != "Generate") {
        let tokens = command.split(">>>");
        let action = tokens.shift();
        if (action == "Contains") {
            let substring = tokens.shift();
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            }
            else {
                console.log("Substring not found!");
            }
        }
        else if (action == "Flip") {
            let [upperOrLowerCase, startIndex, endIndex] = tokens;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (upperOrLowerCase == "Upper") {
                let substring = activationKey.substring(startIndex, endIndex).toUpperCase();
                activationKey = activationKey.substring(0, startIndex) + substring + activationKey.substring(endIndex);
                console.log(activationKey);
            }
            else if (upperOrLowerCase == "Lower") {
                let substring = activationKey.substring(startIndex, endIndex).toLowerCase();
                activationKey = activationKey.substring(0, startIndex) + substring + activationKey.substring(endIndex);
                console.log(activationKey); 5
            }
        }
        else if (action == "Slice") {
            let [startIndex, endIndex] = tokens;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            activationKey = activationKey.substring(0, startIndex) + activationKey.substring(endIndex);
            console.log(activationKey);
        }   
        command = arr.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);