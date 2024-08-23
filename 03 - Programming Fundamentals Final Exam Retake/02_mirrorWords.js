function mirrorWords(arr) {
    let string = arr.shift();
    let pattern = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/gm;
    let patternArr = [];
    let mirrorWordsArr = [];
    let matches = pattern.exec(string);
    while (matches != null) {
        patternArr.push(matches);
        matches = pattern.exec(string);
    }
    for (const curPair of patternArr) {
        let firstWord = '';
        let secondWord = '';
        let half = curPair[0].length / 2;
        for (let i = 0; i < half; i++) {
            firstWord += curPair[0][i];
        }
        for (let i = half; i < curPair[0].length; i++) {
            secondWord += curPair[0][i];
        }
        let reversedSecondWord = secondWord.split("").reverse().join("");
        if (firstWord == reversedSecondWord) {
            firstWord = firstWord.substring(1, firstWord.length - 1);
            secondWord = secondWord.substring(1, secondWord.length - 1);
            mirrorWordsArr.push(`${firstWord} <=> ${secondWord}`)
        }
    }
    if (patternArr.length > 0) {
        console.log(`${patternArr.length} word pairs found!`);
    }
    else {
        console.log('No word pairs found!');
    }
    if (mirrorWordsArr.length > 0) {
        console.log("The mirror words are:");
        console.log(mirrorWordsArr.join(", "));
    }
    else {
        console.log("No mirror words!");
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);