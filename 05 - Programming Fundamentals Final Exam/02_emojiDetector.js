function emojiDetector(arr) {
    let string = arr.shift();
    let emojiArr = [];
    let emojiPattern = /(\:{2}|\*{2})([A-Z][a-z]{2,})\1/g;
    let coolThresholdPattern = /[0-9]/g
    let emojiMatches = string.matchAll(emojiPattern);
    let coolThresholdMatches = string.matchAll(coolThresholdPattern);
    let sumOfDigits = 1;
    for (const curMatch of coolThresholdMatches) {
        sumOfDigits *= Number(curMatch[0]);
    }

    for (const curMatch of emojiMatches) {
        emojiArr.push(curMatch[0])
    }
    let emojiObj = {};
    for (const curEmoji of emojiArr) {
        emojiCoolness = 0;
        for (const curChar of curEmoji) {
            if (curChar != ":" && curChar != "*")
                emojiCoolness += curChar.charCodeAt();
        }
        emojiObj[curEmoji] = emojiCoolness;
    }

    console.log(`Cool threshold: ${sumOfDigits}`);
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);
    for (const emoji in emojiObj) {
        if (emojiObj[emoji] > sumOfDigits) {
            console.log(`${emoji} `);
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);