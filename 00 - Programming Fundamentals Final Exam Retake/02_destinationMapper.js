function destinationMapper(arr) {
    let str = arr.shift();
    let pattern = /([=\/])[A-Z][A-Za-z]{2,}\1/g;
    let matches = str.matchAll(pattern);
    let placesArr = [];
    for (const curEl of matches) {
        let curPlace = curEl[0].substring(1, curEl[0].length - 1);
        placesArr.push(curPlace);
    }
    let travelPointsSum = 0;
    for (const curPlace of placesArr) {
        travelPointsSum += curPlace.length;
    }
    console.log(`Destinations: ${placesArr.join(", ")}`);
    console.log(`Travel Points: ${travelPointsSum}`);
}
destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=']);