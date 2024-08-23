function heartDelivery(arr) {
    let neighborhoodArr = arr.shift().split("@").map(x => Number(x));
    let lastPosition = 0;
    let command = arr.shift();
    while (command != "Love!") {
        let tokens = command.split(" ");
        let action = tokens.shift();
        if (action == "Jump") {
            let number = Number(tokens.shift());
            for (let i = lastPosition; i < neighborhoodArr.length; i++) {
                i += number;
                if (i > neighborhoodArr.length - 1) {
                    i = 0;
                }
                if (neighborhoodArr[i] == 0) {
                    console.log(`Place ${i} already had Valentine's day.`);
                    lastPosition = i;
                    break;
                }
                neighborhoodArr[i] -= 2;
                if (neighborhoodArr[i] <= 0) {
                    console.log(`Place ${i} has Valentine's day.`)
                }
                lastPosition = i;
                break;
            }
        }
        command = arr.shift();
    }
    console.log(`Cupid's last position was ${lastPosition}.`);
    let isSuccessful = true;
    let count = 0;
    for (let i = 0; i < neighborhoodArr.length; i++) {
        if (neighborhoodArr[i] > 0) {
            isSuccessful = false;
            count++;
        }
    }
    if (isSuccessful) {
        console.log(`Mission was successful.`);
    }
    else {
        console.log(`Cupid has failed ${count} places.`);
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
