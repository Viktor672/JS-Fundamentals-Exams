function guineaPig(arr) {
    let foodInGrams = Number(Number(arr[0]) * 1000);
    let hayInGrams = Number(Number(arr[1]) * 1000);
    let coverInGrams = Number(Number(arr[2]) * 1000);
    let weightInGrams = Number(Number(arr[3]) * 1000);
    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;
        if (i % 2 === 0) {
            hayInGrams -= 0.05 * foodInGrams;
        }
        if (i % 3 === 0) {
            coverInGrams -= 1 / 3 * weightInGrams;
        }
        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
}
guineaPig(["10", 
"5", 
"5.2", 
"1"]);