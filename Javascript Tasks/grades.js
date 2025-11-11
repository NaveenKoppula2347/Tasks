let grademarks = [67, 86, 32, 43];
let doublegradeMarks = []
for (let i = 0; i <  grademarks.length; i++) {
    if (grademarks[i] >= 0) {
        console.log("Valid  grademarks: ",  grademarks[i]);
        doubleMarks.push( grademarks[i] * 2)
    }

    if ( grademarks[i] >= 40) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

    if ( grademarks[i] >= 60) {
        console.log("A");
    } else if ( grademarks[i] <= 50) {
        console.log("B");
    } else {
        console.log("C");
    }
}

console.log( gradedoubleMarks);

