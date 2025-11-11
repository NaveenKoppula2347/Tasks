let multiplesOf3 = []
let multiplesOf5 = []
let multiplesOfBoth = []
for (let i = 1; i <= 15; i++) {
    if (i >= 1) {
        console.log("Number: ", i);
    }

    if (i % 3 === 0) {
        console.log("i  is a multiple of 3");
        multiplesOf3.push(i)
    } else {
        console.log("i  is not a multiple of 3");
    }

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(" i is multiple of both 3 and 5");
        multiplesOfBoth.push(i)
    } else if (i % 3 === 0) {
        console.log("i   is multiple of 3");
    } else if (i % 5 === 0) {
        console.log("i is multiple of 5");
        multiplesOf5.push(i);
    } else {
        console.log("i is not multiple of 3 or 5");
    }
}
console.log("Multiples of 3:", multiplesOf3);
console.log("Multiples of 5:", multiplesOf5);
console.log("Multiples of both 3 and 5:", multiplesOfBoth);
