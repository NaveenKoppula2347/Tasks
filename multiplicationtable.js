let n = 4;
let value = []
for (let i = 1; i <= 10; i++) {
    if (n >= 1) {
        console.log(n + " x " + i + " = " + (n * i));
        value.push(n * i)
    }

    if ((n * i) % 2 === 0) {
        console.log("product is even")
    } else {
        console.log("product is odd");
    }

    if (i <= 4) {
        console.log("Beginning of a table");
    } else if (i <= 8) {
        console.log(" Middle of a table");
    } else {
        console.log("End of a table");
    }
}
console.log(value);


