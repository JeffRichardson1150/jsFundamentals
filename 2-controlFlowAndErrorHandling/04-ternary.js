/*
    - a ternary is a shortcut, or shorthand way of writing an if/else statement
    - a basic if statement can't be a ternary; it requires an else (default/catch-all)
*/

let num = -6;

// Ternary
(num > 0) ? console.log("yes") : console.log("no");

// if/else
if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

// Ternary - else if
(num == 0) ? console.log('working') : (num < 0) ? console.log('not working') : console.log('still not working');

// else/if
if (num == 0) {
    console.log('working');
} else if (num < 0) {
    console.log('not working');
} else {
    console.log('still not working');
}


// Structure a ternary across multiple lines
(num == 0) ? console.log('working') 
    : (num < 0) ? console.log('not working') 
    : console.log('still not working');
