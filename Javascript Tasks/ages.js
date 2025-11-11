let ages = [15, 25, 40, 58, 70, 85];
let eligibleAges = []
for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 0) {
        console.log("valid ages:", ages[i]);
    }

    if (ages[i] >= 18) {
        console.log("Eligible to vote");
        eligibleAges.push(ages[i])
    } else {
        console.log("Not eligible to vote");
    }

    if (ages[i] <= 15) {
        console.log("Teenager");
    } else if (ages[i] >= 20 && ages[i] <= 40) {
        console.log("Major");
    } else if (ages[i] >= 50 && ages[i] <= 60) {
        console.log("Adult");
    } else {
        console.log("Senior Citizen");
    }
}
console.log(eligibleAges);