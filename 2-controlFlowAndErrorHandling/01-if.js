/*
    A falsy value is a value that is considered false when encountered in a boolean context
        - false
        - 0
        - "", '', ``
        - null
        - undefined
        - NaN (not a number)
*/

let isOn = true;

if (isOn == true) {
    console.log("The light is on!");
}

if (isOn) {
    console.log("The light is still on!");
}

isOn = "false";

if (isOn == false) {
    console.log("The light is off");  // will not print; coercion doesn't happen in comparisons
}

isOn = false;

if (isOn == false) {
    console.log("The light is off");  // will print; the variable was assigned the boolean value
}

let weather = 60;

if (weather < 50) {
    console.log("Wear a jacket!")  // will not print; weather is not less than 50
}

let weather = 30;

if (weather < 50) {
    console.log("Wear a jacket!")   // will  print; weather is less than 50
}

