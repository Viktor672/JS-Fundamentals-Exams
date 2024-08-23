function blackFlag(arr) {
    let days = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 == 0) {
            totalPlunder += 0.5 * dailyPlunder;
        }
        if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else{
        console.log(`Collected only ${(totalPlunder/expectedPlunder*100).toFixed(2)}% of the plunder.`);
        
    }
}
blackFlag(["10",
    "20",
    "380"]);
    
