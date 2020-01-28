/*
    SCOPE

        - scope is how a computer keeps track of all variables in a program
        - scopes can be nested, where there's an outer scope (global), and an inner scope (local)
*/

let x = 12; // globally scoped variable

function scope() {
    let x = 33;  // locally scoped variable - declare & initialize a new x variable
    console.log(x);  // 33
}

scope();

console.log(x);  // 12

let y = 12;

function scope() {
    y = 33;  // didn't use 'let' to initialize a new variable; reinitialized it to 33
    console.log(y);  // 33
}

scope();

console.log(y);  // 33 - the globally initialized y was reassigned a value in the function

/*
    - const is a constant that cannot be re-expressed or reinitialized as another value; const is scoped to the nearest enclosing block
    - var is scoped to the nearest function block
    - let is scoped to the nearest enclosing block
*/

var x = 12;

function varTest() {
    var x = 33;

        if (1 == 1) {
            var x = 45;
            console.log(x);
        }
    
    console.log(x);
}

varTest();

console.log(x);


let x = 12;

function letTest() {
    var x = 33;

        if (true) {
            let x = 45;
            console.log(x);
        }
    
    console.log(x);
}

letTest();

console.log(x);

function constTest() {
    const scope = 1;

        if(true) {
            const scope = 2;
            console.log(scope);
        }

    console.log(scope);
}

constTest();
