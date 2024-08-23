function arrayModifier(arr) {
    let ourArrStr = arr.shift();
    let ourArr = ourArrStr.split(" ").map(Number);
    let action = arr.shift();
    while (action !== "end") {
        let tokens = action.split(" ");
        let command = tokens.shift();
        if (command === "swap") {
            let index1 = Number(tokens.shift());
            let index2 = Number(tokens.shift());
            let num1 = ourArr[index1];
            let num2 = ourArr[index2];
            ourArr.splice(index1, 1, num2);
            ourArr.splice(index2, 1, num1);
        }
        else if (command === "multiply") {
            let index1 = Number(tokens.shift());
            let index2 = Number(tokens.shift());
            ourArr[index1] = ourArr[index1] * ourArr[index2];
        }
        else if (command === "decrease") {
            for (let i = 0; i < ourArr.length; i++) {
                ourArr[i] -= 1;
            }
        }
        action = arr.shift();
    }
    console.log(ourArr.join(", "));
}
arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);