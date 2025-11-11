let result = [90, 68, 45, 28];
let passresultStudents = [];
for (let i = 0; i <  result.length; i++) {
    if (result[i] >= 0) {
        console.log("Valid  result: ",  result[i]);
    }

    if ( result[i] >= 35) {
        console.log("Pass");
        passresultStudents.push( result[i]);
    } else {
        console.log("Fail");
    }

    if ( result[i] >= 90) {
        console.log("Excellent");
    } else if ( result[i] >= 70) {
        console.log("Good");
    } else if ( result[i] >= 50) {
        console.log("Average");
    } else {
        console.log("Needs Improvement");
    }
}
console.log("PassedStudentsresult:", passresultStudents )


