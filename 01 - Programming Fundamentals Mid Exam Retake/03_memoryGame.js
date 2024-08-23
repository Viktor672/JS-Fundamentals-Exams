function memoryGame(arr) {
    let sequnceStr = arr.shift();
    let sequnceArr = sequnceStr.split(" ");
    let action = arr.shift();
    let count = 0;
    while (action != "end") {
        let tokens = action.split(" ");
        let int1 = Number(tokens.shift());
        let int2 = Number(tokens.shift());
        let elOfInt1 = sequnceArr[int1];
        let elOfInt2 = sequnceArr[int2];
        if (sequnceArr[int1] && sequnceArr[int2] && int1!=int2) {
            if (sequnceArr[int1] == sequnceArr[int2]) {
                console.log(`Congrats! You have found matching elements - ${elOfInt1}!`);
                count++;
                let indexOfEl1 = sequnceArr.indexOf(elOfInt1);
                sequnceArr.splice(indexOfEl1, 1);
                let indexOfEl2 = sequnceArr.indexOf(elOfInt2);
                sequnceArr.splice(indexOfEl2, 1);
                if (sequnceArr.length == 0) {
                    console.log(`You have won in ${count} turns!`);
                    return;
                }
            }
            else {
                console.log(`Try again!`);
                count++;
            }
        }
        else {
            count++;
            console.log("Invalid input! Adding additional elements to the board");

            sequnceArr.splice(sequnceArr.length / 2, 0, `-${count}a`);
            sequnceArr.splice(sequnceArr.length / 2, 0, `-${count}a`);
        }
        action = arr.shift();
    }
    console.log(`Sorry you lose :(`);
    console.log(sequnceArr.join(" "));
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"]);