let leapyears = []
for (let i = 2000; i <= 2025; i++) {
    if (i >= 2000) {
        console.log("Checking  year:", i);
    }

    if (i % 4 === 0) {
        console.log("It is a leapyear");
    } else {
        console.log("It is not  a leapyear");
    }

    if (i % 400 === 0) {
        console.log(" Definitely a leapyear");
        leapyears.push(i)
    } else if (i % 100 === 0) {
        console.log("Not a leapyear");
    } else if (i % 4 === 0) {
        console.log("It is a leapyear");
        leapyears.push(i)
    } else {
        console.log("It is not  a leapyear");
    }
}
console.log(leapyears);
