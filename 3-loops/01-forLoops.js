/*
for loops take in 3 parameters:
    (1) inital expression
    (2) condition
    (3) increment expression
*/
//        (1)     (2)        (3)
for (let i = 0; i < 10; i = i + 1) {  // increment expression can be i++
    console.log(i);
}

// Count from 0 to 20 by 2
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Count from 10 to 0 by 1
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Count from 0 to -24 by 2
for (let i = 0; i >= -24; i -= 2) {
    console.log(i);
}

// display each name individually of a name
let name = "Horace";

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// add up all numbers from 1 to 50 (should equal 1275)
let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log(sum);