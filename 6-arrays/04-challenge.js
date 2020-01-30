let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

console.log(arr);

if (arr instanceof Array) {
    let arrReverse = arr.reverse();
    console.log(arrReverse);
    arrReverse.forEach(num => console.log(num));
} else {
    console.log('not an array');
}