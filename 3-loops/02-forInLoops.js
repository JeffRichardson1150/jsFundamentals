/*
    - great for counting key/value pairs in an object. Properties in an object are what is called enumerable
        * for in loops will iterate over an object's enumerable properties
*/

let student = {
    name:   "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

console.log(student.degree); // dot notation

for (let item in student) {
    // console.log(item);  // prints the names of the keys ("name", "awesome", "degree", "week") in the object
    // console.log(student[item]);  // object bracket notation - prints out the values of the object 
}

let dogArray = ["great dane", "husky", "border collie", "dalmation", "pug"];

for (let dog in dogArray) {
    console.log(dog);
    // console.log(dogArray[dog]);
}


let name = "jEfF";
let capName;
// console.log(name.slice(1));

for (let i in name) {
    if (i == 0) {
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

console.log(capName);

