function hi() {
    console.log('hello');
}

// hi;  // won't get anything
// hi();  // invokes the function, prints 'hello'
// console.log(hi);  // grabs the function name, doesn't invoke it
// console.log(hi());
// >> 'hello' undefined -- invokes the function, then processes this console.log with an undefined item 

// as soon as our parser sees that there is a function invocation, that happens immediately


function toTen() {
    for(let i = 1; i <= 10; i++) {
    console.log(i);
    }
}

toTen()

let arr = ['This', 'is', 'really', 'cool'];
function listValues() {
    for (let word of arr) {
        console.log(word);
    }
}

for (let word in arr) {
    console.log(arr[word]);
}

for (let number = 0; number < arr.length; number++) {
    console.log(arr[number])
}

listValues();

