/*
ARRAYS
    - arrays are containers that hold a list of items
    - denoted by []
    - can hold multiple datatypes
    - each item, regardless of datatype, is separated by a comma
*/

let list = ['orange', 'banana', 'apple'];

console.log(list[1]);

/*
    - when calling an array, we can append squre brackets onto the end of our array with the index number we want to reference. This is called square braket notation.
    - javascript starts counting at 0 (for indices)
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];
console.log(typeof students);  // returns "Object"
console.log(students instanceof Array);  // instanceof operator is used to check the type of a variable we're working with -- returns true
console.log(students instanceof Object);  // returns true
console.log(students[2]);  // returns "Jeff"

/*
CHALLENGE

    - dive into the nested array and pull the value "Will"
    - print out "Hello Will!"
*/

let students = ['Matt', 'Bob', 'Jeff', 'AB', 23, true, ['Kris', 'Taylor', 'Will']];
let nameWill = students[6][2];
console.log(`Hello ${nameWill}!`);

