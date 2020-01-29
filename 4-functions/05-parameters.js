// 

function hi(name) {
    console.log(`Hello, ${name}`);
}

hi();  // outputs 'Hello, undefined' ; we didn't pass an argument

hi('Jeff');  // outputs 'Hello, Jeff' ; we didn't pass an argument

function counter(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

function fullName(firstName, lastName) {
    let concatName = firstName + " " + lastName;
    console.log(`Hello, my name is ${concatName}`);
}

fullName('Jeff', 'Richardson');