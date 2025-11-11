let numbers = [3, 5, 7];
let factorials = []
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let fact = 1;
    console.log("Calculating factorial for: " + num);
    if (num >= 0) {
        console.log("Valid number: ", num);
    }

    for (let j = 1; j <= num; j++) {
        console.log("Multiplying: " + j);
        fact *= j;
    }

    if (num === 0) {
        console.log("Factorial is 1");
    } else {
        console.log("Factorial calculated for " + num);
    }

    if (num <= 3) {
        console.log("Small factorial number");
    } else if (num <= 10) {
        console.log("Medium factorial number");
    } else {
        console.log("Large factorial number");
    }
    factorials.push(fact);
    console.log("Factorial of " + num + " = " + fact);
}
console.log("Factorials calculated:", factorials);
