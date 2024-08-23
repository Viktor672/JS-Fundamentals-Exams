function adAstra(arr) {
    let string = arr.shift();
    let foodArr = [];
    let pattern = /([#|])(?<item>[a-zA-Z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    let match = pattern.exec(string);
    let totalCalories = 0;
    while (match != null) {
        let { item, date, calories } = match.groups;
        calories = Number(calories);
        totalCalories += calories;
        foodArr.push(item, date, calories);
        match = pattern.exec(string);
    }
    let foodToLast = Math.trunc(totalCalories / 2000);
    console.log(`You have food to last you for: ${foodToLast} days!`);
    for (let i = 0; i < foodArr.length; i += 3) {
        let item = foodArr[i];
        let date = foodArr[i + 1];
        let calories = foodArr[i + 2];
        console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ]);