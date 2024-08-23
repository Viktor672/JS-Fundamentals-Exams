function bonusScoringSystem(arr) {
    let numOfStudents = Number(arr.shift());
    let numOfLectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let maxBonus = 0;
    let maxStudentAttendances = 0;
    for (let curStudentAttendances of arr) {
        curStudentAttendances = Number(curStudentAttendances);
        let totalBonus = (curStudentAttendances / numOfLectures) * (5 + additionalBonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxStudentAttendances = curStudentAttendances;
        }
    }
    console.log(`Max Bonus: ${maxBonus.toFixed(0)}.`);
    console.log(`The student has attended ${maxStudentAttendances} lectures.`);
}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
