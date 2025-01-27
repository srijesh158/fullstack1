//write a condition to check greatest numbers among 3 numbers
//let a = 20
//let b = 30
//let c = 40

//Using if Conditions
let a = 20;
let b = 30;
let c = 40;

if (a > b && a > c) {
    console.log("The greatest number is a:", a);
} else if (b > a && b > c) {
    console.log("The greatest number is b:", b);
} else {
    console.log("The greatest number is c:", c);
}


//Using switch Case
if (a > b && a > c) {
    greatest = "a";
} else if (b > a && b > c) {
    greatest = "b";
} else {
    greatest = "c";
}

switch (greatest) {
    case "a":
        console.log("The greatest number is a:", a);
        break;
    case "b":
        console.log("The greatest number is b:", b);
        break;
    case "c":
        console.log("The greatest number is c:", c);
        break;
    default:
        console.log("There is a tie or invalid input.");
}