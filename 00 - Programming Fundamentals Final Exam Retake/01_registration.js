function registration(arr) {
    let username = arr.shift();
    let action = arr.shift();
    while (action !== "Registration") {
        let tokens = action.split(" ");
        let command = tokens.shift();
        if (command == "Letters") {
            let lowerOrUpperCase = tokens.shift();
            if (lowerOrUpperCase == "Lower") {
                username = username.toLowerCase();
                console.log(username);
            }
            else if (lowerOrUpperCase == "Upper") {
                username = username.toUpperCase();
                console.log(username);
            }
        }
        else if (command == "Reverse") {
            let startIndex = Number(tokens.shift());
            let endIndex = Number(tokens.shift());
            if (username[startIndex] && username[endIndex]) {
                if (username.length > 1) {
                    let substring = username.substring(startIndex, endIndex + 1);
                    substring = Array.from(substring).reverse().join("");
                    console.log(substring);
                }
                else {
                    console.log(username);
                }
            }
        }
        else if (command == "Substring") {
            let substring = tokens.shift();
            if (username.includes(substring)) {
                username = username.replace(substring, "");
                console.log(username);
            }
            else {
                console.log(`The username ${username} doesn't contain ${substring}.`);
            }
        }
        else if (command == "Replace") {
            let char = tokens.shift();
            if (username.includes(char)) {
                while(username.includes(char)){
                username = username.replace(char, '-');
                }
                console.log(username);
            }
        }
        else if (command == "IsValid") {
            let char = tokens.shift();
            if (username.includes(char)) {
                console.log("Valid username.");
            }
            else {
                console.log(`${char} must be contained in your username.`);
            }
        }
        action = arr.shift();
    }
}
registration(
    [
        'ThisIsSoftUni',
        'Reverse 1 3',
        'Replace S',
        'Substring hi',
        'Registration'
    ]
)