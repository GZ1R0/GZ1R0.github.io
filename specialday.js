

let month = Number(prompt("Enter month as a number (1-12):"));
let day = Number(prompt("Enter day as a number (1-31):"));


if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    if (day > 31) {
        console.log("Invalid date");
    }
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (day > 30) {
        console.log("Invalid date");
    }
    console.log("Invalid date");
} else if ((month < 2 && day < 18) || (month < 2)) {
    console.log("Before special day");
} else if ((month > 2 && day > 18) || (month > 2)) {
    console.log("After special day");
} else if (month == 2 && day == 18) {
    console.log("Special day!");
} else if (month > 12 || day > 31) {
    console.log("Invalid date");
}