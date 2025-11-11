let evenSquares = []
for (let i = 1; i <= 10; i++) {
    let square = i * i;
    if (square >= 0) {
        console.log("Square of " + i + " is " + square);
    }

    if (square % 2 === 0) {
        console.log("Square is even");
        evenSquares.push(square);
    } else {
        console.log("Square is odd");
    }

    if (square <= 10) {
        console.log("Small square");
    } else if (square <= 50) {
        console.log("Medium square");
    } else {
        console.log("Large square");
    }
}
console.log("Even Squares:", evenSquares);