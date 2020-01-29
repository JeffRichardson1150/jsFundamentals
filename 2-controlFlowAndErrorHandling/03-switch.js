/*
    - switch statements execute a block of code depending on different cases
    - switch statements often use the break or default keywords
        * both keywords are optional
            # the break keyword breaks us out of the current condition & switch statement
            # the default keyword specifies code to run if there is no case match (is the default to run if none of the cases evaluate to true in the switch statement)
*/

// let officeCharacter = 'Michael';
// let officeCharacter = 'Pam';
// let officeCharacter = 'Jim';
let officeCharacter = 'Dwight';

switch (officeCharacter) {
    case "Michael": 
        console.log('My mind is going a mile an hour');
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

let FB = 15;

switch (FB) {
    case FB % 5 && FB % 3:
        console.log("FizzBuzz")
        break;
    case FB % 5:
        console.log("Buzz");
        break;
    case FB % 3:
        console.log("Fizz");
        break;
    default:
}

let FB = 5

switch(true) {
    case (FB % 5 == 0 && FB % 3 == 0):
        console.log("FizzBuzz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    default:
        console.log(FB);
}