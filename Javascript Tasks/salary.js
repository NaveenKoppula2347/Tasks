let experience = [2, 5, 7, 8, 10];
let bonusCapable = []
for (let i = 0; i < experience.length; i++) {
    if (experience[i] >= 0) {
        console.log("Experience:" + experience[i] + "years");
    }

    if (experience[i] >= 2) {
        console.log("Capable for salarybonus ");
        bonusCapable.push(experience[i]);
    } else {
        console.log("Not capable for salarybonus");
    }

    if (experience[i] <= 3) {
        console.log("No bonus");
    } else if (experience[i] >= 4) {
        console.log("6% bonus");
    } else {
        console.log("8% bonus");
    }
}
console.log(bonusCapable);
