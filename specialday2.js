let month = Number(prompt("Enter month (1-12):"));
let day = Number(prompt("Enter day (1-31):"));

if (month < 2) { console.log("Before");
 } else if (month > 2) { console.log("After");
} else {
    if (day < 18) {
        console.log("Before");
    } else if (day > 18) {
        console.log("After");
    } else {
        console.log("Special day!");
    }
}