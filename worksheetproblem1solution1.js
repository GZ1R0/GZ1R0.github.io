let num1 = Number(prompt());
let num2 = Number(prompt());
let num3 = Number(prompt());
let num4 = Number(prompt());
if (num1 == 8 || num1 == 9) {
    if (num4 == 8 || num4 == 9) {
        if (num2 == num3) {
            console.log("Spam");
        } else {
            console.log("Pick up");
        }
    } else {
        console.log("Pick up");
    }
} else {
    console.log("Pick up");
}