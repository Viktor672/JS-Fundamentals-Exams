function movingTarget(arr) {
    let sequenceStr = arr.shift();
    let sequence = sequenceStr.split(" ").map(x => Number(x));
    let action = arr.shift();
    while (action != "End") {
        let tokens = action.split(" ");
        let command = tokens.shift();
        if (command === "Shoot") {
            let index = Number(tokens.shift());
            let power = Number(tokens.shift());
            if (sequence[index]) {
                sequence[index] -= power;
                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }
            }
        }
        else if (command === "Add") {
            let index = Number(tokens.shift());
            let value = Number(tokens.shift());
            if (sequence[index]) {
                sequence.splice(index, 0, value);
            }
            else {
                console.log(`Invalid placement!`);
            }
        }
        else if (command === "Strike") {
            let index = Number(tokens.shift());
            let radius = Number(tokens.shift());
            if (sequence[index] && sequence[index + radius] && sequence[index - radius]) {
                let difference = index - radius;
                sequence.splice(index, radius + 1);
                sequence.splice(difference, radius);
            }
            else {
                console.log(`Strike missed!`);
            }
        }
        action = arr.shift();
    }
    console.log(sequence.join("|"));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
