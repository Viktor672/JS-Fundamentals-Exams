function thePianist(arr) {
    let numberOfPieces = Number(arr.shift());
    let piecesObj = {};
    for (let i = 0; i < numberOfPieces; i++) {
        let tokens = arr[i].split("|");
        let [piece, composer, key] = tokens;    //possible error
        piecesObj[piece] = { composer: composer, key: key };
    }
    arr.splice(0, numberOfPieces);
    let action = arr.shift();
    while (action != "Stop") {
        let tokens = action.split("|");
        let command = tokens.shift();
        if (command == "Add") {
            let [piece, composer, key] = tokens;
            if (piece in piecesObj) {
                console.log(`${piece} is already in the collection!`);
            }
            else {
                piecesObj[piece] = { composer: composer, key: key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                let a = 5;
            }
        }
        else if (command == "Remove") {
            let piece = tokens.shift();
            if (piece in piecesObj) {
                delete piecesObj[piece];
                console.log(`Successfully removed ${piece}!`);
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        else if (command == "ChangeKey") {
            let [piece, key] = tokens;
            if (piece in piecesObj) {
                piecesObj[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        action = arr.shift();
    }
    for (const key in piecesObj) {
        console.log(`${key} -> Composer: ${piecesObj[key].composer}, Key: ${piecesObj[key].key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);