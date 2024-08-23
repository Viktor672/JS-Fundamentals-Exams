function shootForTheWin(arr) {
    let sequenceStr = arr.shift();
    let sequenceArr = sequenceStr.split(" ").map(Number);
    let count = 0;
    let action = arr.shift();
    while (action != "End") {
        let index = Number(action);
        if (index >= 0 && index < sequenceArr.length && sequenceArr[index] != -1) {
            let curShot = Number(sequenceArr[index]);
            sequenceArr[index] = -1;
            for (let i = 0; i < sequenceArr.length; i++) {
                if (sequenceArr[i] != -1) {
                    if (sequenceArr[i] > curShot) {
                        sequenceArr[i] -= curShot;
                    }
                    else {
                        sequenceArr[i] += curShot;
                    }
                }
            }
        }
        action = arr.shift();
    }
    for (let i = 0; i < sequenceArr.length; i++) {
        if (sequenceArr[i] == -1) {
            count++;
        }
    }
    console.log(`Shot targets: ${count} -> ${sequenceArr.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);    