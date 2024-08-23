function secretChat(arr) {
    let concealedMsg = arr.shift();
    let command = arr.shift();
    while (command != "Reveal") {
        let tokens = command.split(":|:");
        let action = tokens.shift();
        if (action == "InsertSpace") {
            let index = Number(tokens.shift());
            concealedMsg = concealedMsg.substring(0, index) + " " + concealedMsg.substring(index);
            console.log(concealedMsg);
        }
        else if (action == "Reverse") {
            let substring = tokens.shift();
            if (concealedMsg.includes(substring)) {
                concealedMsg = concealedMsg.replace(substring, "");
                let reversedSubstring = "";
                for (let i = substring.length - 1; i >= 0; i--) {
                    reversedSubstring += substring[i];
                }
                concealedMsg += reversedSubstring;
                console.log(concealedMsg);
            }
            else{
                console.log("error");
            }
        }
        else if (action == "ChangeAll") {
            let substring = tokens.shift();
            let replacement = tokens.shift();
            while (concealedMsg.includes(substring)) {
                concealedMsg = concealedMsg.replace(substring, replacement);
            }
            console.log(concealedMsg);
        }
        command = arr.shift();
    }
    console.log(`You have a new text message: ${concealedMsg}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);