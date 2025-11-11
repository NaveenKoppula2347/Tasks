let marksResult = [90, 68, 45, 28];
let passedStudents = [];
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 0) {
        console.log("Valid marks: ", marks[i]);
    }

    if (marks[i] >= 35) {
        console.log("Pass");
        passedStudents.push(marks[i]);
    } else {
        console.log("Fail");
    }

    if (marks[i] >= 90) {
        console.log("Excellent");
    } else if (marks[i] >= 70) {
        console.log("Good");
    } else if (marks[i] >= 50) {
        console.log("Average");
    } else {
        console.log("Needs Improvement");
    }
}
console.log("Students passed:", passedStudents)
