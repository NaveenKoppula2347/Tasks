let marks = [67, 86, 32, 43];
let doubleMarks = []
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 0) {
        console.log("Valid marks: ", marks[i]);
        doubleMarks.push(marks[i] * 2)
    }

    if (marks[i] >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

    if (marks[i] >= 60) {
        console.log("A");
    } else if (marks[i] <= 50) {
        console.log("B");
    } else {
        console.log("C");
    }
}
console.log(doubleMarks);