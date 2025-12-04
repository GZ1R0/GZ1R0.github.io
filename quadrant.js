let x = Number(prompt("Enter x:"));
let y = Number(prompt("Enter y:"));

if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x > 0 && y < 0) {
    console.log("Q4");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
}
