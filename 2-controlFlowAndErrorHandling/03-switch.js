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
