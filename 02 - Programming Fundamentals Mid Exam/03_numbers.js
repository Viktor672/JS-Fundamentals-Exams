function numbers(string) {
    let arr = string.split(" ");
    let sumArr = 0;
    let resultArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }
    let averageSumArr = sumArr / arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > averageSumArr) {
            resultArr.push(arr[i]);
            count++;
        }
    }
    if (count === 0) {
        console.log("No");
        return;
    }
    resultArr.sort((a, b) => b - a);
    if (resultArr.length > 5) {
        let newResultArr = [];
        resultArr.sort((a, b) => b - a);
        for (let i = 0; i < resultArr.length; i++) {
            newResultArr = resultArr.slice(0, 5);
        }
        console.log(newResultArr.join(" "));
    }
    else {
        console.log(resultArr.join(" "));
    }
}
numbers('10 20 30 40 50');