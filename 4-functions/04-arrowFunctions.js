/*

    1. all fat arrow functions need to be set to a variable
    2.  the fat arrow (=>) signifies that this is a function
    - arrow functions are a shorthand way of writing a function expression - not declaration
        *     Arrow functions won't get hoisted since they are function expressions
*/

//  (1)    (2)
let hi = () => {
    console.log('hello'); // return is implicit and happens by default
}

//CONCISE BODY
let hi = () => console.log('hello');
hi();

// BLOCK BODY
let hi = () => {
    console.log('hello');
    // return keyword must be present inside of a block body arrow function
}
hi();

// CONCISE vs BLOCK

let apples = num => console.log(`There are ${num} apples.`);  // don't need parentheses around a single argument 
apples(10);

let counting = num => {
    for(let i = 0; i <= num; i++) {
        console.log(i);
    }
}
counting(8);

/*
    - if there are no arguments, we have to have the parens ()
    - if there is a single argument, you can dhoose to have no parens or to include the parens
    - if there are multiple arguments, you have to include parens
*/

