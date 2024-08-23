function passwordReset(arr) {
    let password = arr.shift();
    let command = arr.shift();
    while (command !== "Done") {
        let tokens = command.split(" ");
        let action = tokens.shift();
        if (action == "TakeOdd") {
            let oddIndexPassword = "";
            for (let i = 1; i < password.length; i += 2) {
                oddIndexPassword += password[i];
            }
            password = oddIndexPassword;
            console.log(password);
        }
        else if (action === "Cut") {
            let index = Number(tokens.shift());
            let length = Number(tokens.shift());
            let substring = password.substring(index, index + length);
            if (password.includes(substring)) {
                password = password.replace(substring,"");
                console.log(password);
            }
        }
        else if (action === "Substitute") {
            let substring = tokens.shift();
            let newSubstring = tokens.shift();
            if (password.includes(substring)) {
                password = password.split(substring).join(newSubstring);
                console.log(password);
            }
            else {
                console.log("Nothing to replace!");
            }
        }
        command = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);