/*
    - function declarations get hoisted
    - function expressions do not get hoisted
        * function expression won't be hoisted on the compiler's first pass; can't call the function before it's declared. only the variable name "hey" is stored in memory
*/
let hey = function hi() {
    console.log('hello');
}