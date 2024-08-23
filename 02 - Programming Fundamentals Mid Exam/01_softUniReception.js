function softUniReception(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Number(arr[i]);
    }
    let studentsCount = Number(arr[arr.length - 1]);
    let curHour = 0;
    while (studentsCount > 0) {
        curHour++;
        if (curHour % 4 == 0) {
            curHour++;
        }
        studentsCount -= sum;
    }
    console.log(`Time needed: ${curHour}h.`);
}
softUniReception(['3','2','5','40']);