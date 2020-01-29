/*
    - forOf loops look at the iterable properties of an array
    - can't use forOf loops on objectsd because objects are enumerable, not iterable
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item of student) {
    console.log(item);
}

let dogArray = ["great dane", "husky", "border collie", "dalmation", "pug"];

for (let dog of dogArray) {
    console.log(dog, 'goes bark');
}
