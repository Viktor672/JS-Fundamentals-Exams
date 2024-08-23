function theImitationGame(arr) {
    let encryptedMsg = arr.shift();
    let action = arr.shift();
    while (action != "Decode") {
        let tokens = action.split("|");
        let command = tokens.shift();
        if (command === "Move") {
            let numOfLetters = Number(tokens.shift());
            let firstLetters = encryptedMsg.substring(0, numOfLetters);
            encryptedMsg = encryptedMsg.replace(firstLetters, "");
            encryptedMsg += firstLetters;
        }
        else if (command == "Insert") {
            let index = Number(tokens.shift());
            let value = tokens.shift();
            encryptedMsg = encryptedMsg.substring(0, index) + value + encryptedMsg.substring(index);
        }
        else if (command == "ChangeAll") {
            let substring = tokens.shift();
            let replacement = tokens.shift();
            while (encryptedMsg.includes(substring)) {
                encryptedMsg = encryptedMsg.replace(substring, replacement);
            }
        }
        action = arr.shift();
    }
    console.log(`The decrypted message is: ${encryptedMsg}`);
}
theImitationGame([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);