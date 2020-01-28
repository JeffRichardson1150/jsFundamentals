/*
    - a variable is a named container for storing data
    - we name variables so that we can refer to them again
*/

let a = 2;

    let      b    =     1;
/*  (1)     (2)  (3)   (4)

    1. JavaScript keyword
    2. variable name
    3. assignment operator
    4. variable value
*/

console.log(a + b);

/*
    notes on variables
        - the name must begin with a letter, _, or $  (may not start with a number)
        - numbers may follow the above characters but they can't come first
        - JavaScript is case sensitive
        - no spaces allowed in variable names
        - Camel Case : multiple word variable names - initial letter capitalized - is the best practice (multipleWordVariable)
     

*/

let hello = 'test one';
let Hello = 'test two';
console.log(hello, Hello);

/*
    var, let, const:

        - var: 'old' keyword for variables in javascript
        - let: 'new' keyword since ES6 (the biggest upgrade to javascript & the new version of javascript)
        - const: any variable declared as const cannot be changed once declared (var & let variables can be changed)
*/

/*
    Declarations vs Initialization of variables:
        - Declarations are the LEFT side of a variable
            * the Declaration in let x = 5;    is    let x
            * declarations are on the left side of the assignment operator (=)
        - Initializations are the RIGHT SIDE of the assignment operator
            * the Initialization in let x = 5;   is    5
            * it sets the value of the variable
            * the value we initialize our variables as is what is on the right side of the assignment operator (=)

*/

let x;
console.log('Declaration:', x);  // declaration: undefined

x = 10; 
console.log('Initialization: ', x); // Initialization: 10

x = 100;
console.log('Reinitialization: ', x);

let y = 'hello';
console.log(x, y);

const today = 'Great';
console.log(today);

today = 'Wonderful';
console.log(today);