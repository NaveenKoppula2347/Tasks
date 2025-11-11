let output = []
for (let i = 1; i <= 10; i++) {
    if (i >= 1) {
        console.log("Number:", i);
        output.push(i)
    }

    if (i % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }

    if (i <= 3) {
        console.log("Smaller Number");
    } else if (i <= 7) {
        console.log("Medium Number");
    } else {
        console.log("Large Number");
    }
}
console.log(output);
















