/*
OBJECT BRACKET NOTATION ====================================================================================
    - object bracket notation, just like dot notation, allows us to find a value in an object
    - object bracket notation also allows us to set the key of an object
    - also handy if we want to store keys of an object as a variable

    - object bracket notation works because all keys inside of an objectd are strings, even though they're not wrapped in a single or double quotes
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// let test = Object.keys(garden);  // returns an array of all keys in the object
// console.log(test);
// console.log(typeof test[0]);

// let zucchini = garden['vegetable'];
// console.log(zucchini);

/*
    Create a new, empty object.
    Create a new key/value
*/
let baking = {};
baking['zucchini'] = 'better make some bread';
console.log(baking);

console.log(baking[garden['vegetable']]);

baking['flour'] = 'self rising';
console.log(baking);

let testObj = {
    "Spaces Here":  true,
    noSpaces:   true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]); // if select Spaces Here from the MDN popup helper, it will set the reference to bracket notation because the key name includes spaces
