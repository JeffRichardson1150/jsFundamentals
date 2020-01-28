/*
let weather = 70;

if (weather < 50) {
    console.log("Wear a jacket");
} else {
    console.log("No jacket necessary");
}
*/
/*
let name = "Andrew";
// var name = prompt("Please enter your name")

if (name == "Jeff") {
    console.log("Hello, my name is",name);
    console.log(`Hello, my name is ${name}.`);
} else {
    console.log("Hello, is your name",name+"?");
    console.log(`Hello, is your name ${name}?`);
}
*/

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

// let name = 'zAchARy';


/*

// BRONZE
// let name = 'zAchARy';
let firstLetter = name.substr(0, 1); // isolate the first character of the name string
// let firstLetter = name[0]; // get the first character of the name string
// let firstLetter = charAt(0); // get the first character of the name string
let upperCaseLetter = firstLetter.toUpperCase(); // save the uppercase of the first character
let nameLength = name.length;
let nameLastIndex = nameLength - 1;  // the last index is 1 less than the length (the first character index is 0)
let nameWithoutFirstLetter = name.substr(1,nameLastIndex);
// let nameWithoutFirstLetter = name.slice(1); // slice returns the string from the index provided through the end of string

if (firstLetter == upperCaseLetter) {
    console.log(name);
}else {
    console.log("hey, this isn't written correctly");
}

// SILVER
// let name = 'zAchARy';
let firstLetter = name.substr(0, 1); // isolate the first character of the name string
// let firstLetter = name[0]; // get the first character of the name string
// let firstLetter = charAt(0); // get the first character of the name string
let upperCaseLetter = firstLetter.toUpperCase(); // save the uppercase of the first character
let nameLength = name.length;
let nameLastIndex = nameLength - 1;  // the last index is 1 less than the length (the first character index is 0)
let nameWithoutFirstLetter = name.substr(1,nameLastIndex);
// let nameWithoutFirstLetter = name.slice(1); // slice returns the string from the index provided through the end of string

if (firstLetter == upperCaseLetter) {
    console.log(firstLetter);
}else {
    nameLowerCase = nameWithoutFirstLetter.toLowerCase();
    //    console.log("hey, this isn't written correctly");
    console.log(nameLowerCase);
}
*/

/*
// SILVER shorter version
// let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
}

// GOLD
// let name = 'zAchARy';
let firstLetter = name.substr(0, 1); // isolate the first character of the name string
// let firstLetter = name[0]; // get the first character of the name string
// let firstLetter = charAt(0); // get the first character of the name string
let upperCaseLetter = firstLetter.toUpperCase(); // save the uppercase of the first character
let nameLength = name.length;
let nameLastIndex = nameLength - 1;  // the last index is 1 less than the length (the first character index is 0)
let nameWithoutFirstLetter = name.substr(1,nameLastIndex);
// let nameWithoutFirstLetter = name.slice(1); // slice returns the string from the index provided through the end of string

nameLowerCase = nameWithoutFirstLetter.toLowerCase();
if (firstLetter == upperCaseLetter) {
    console.log(firstLetter+nameLowerCase);
}else {
    console.log(upperCaseLetter+nameLowerCase);
}
*/

// GOLD shorter version
let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let isNotUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(isNotUpperCase);
}
