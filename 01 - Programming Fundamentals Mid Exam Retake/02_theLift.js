function theLift(arr) {
    let peopleWaiting = Number(arr.shift());
    let currentStateStr = arr.shift();
    let currentStateArr = currentStateStr.split(" ").map(Number);
    for (let i = 0; i < currentStateArr.length; i++) {
        for (let j = currentStateArr[i]; j < 4; j++) {
            currentStateArr[i] += 1;
            peopleWaiting--;
            if (peopleWaiting > 0) {
                let count = 0;
                for (let k = 0; k < currentStateArr.length; k++) {
                    if (currentStateArr[k] === 4) {
                        count++;
                        if (count === currentStateArr.length) {
                            console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
                            console.log(currentStateArr.join(" "));
                            return;
                        }
                    }
                }
            }
            if (peopleWaiting === 0) {
                break;
            }
        }
        if (peopleWaiting === 0) {
            break;
        }
    }
    for (let l = 0; l < currentStateArr.length; l++) {
        if (currentStateArr[l] < 4) {
            console.log("The lift has empty spots!");
            console.log(currentStateArr.join(" "));
            return;
        }
    }
    console.log(currentStateArr.join(" "));
}
theLift(["15",
    "0 0 0 0 0"]);
   