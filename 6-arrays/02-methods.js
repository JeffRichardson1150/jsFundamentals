let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
console.log('original array:', food);

food.push('Pizza');
console.log('push Pizza at end:', food);

/*
SPLICE
    - remove items from the array and replace with other items
    1 position
    2 how many to delete
    3 what to add in it's place
*/
//         (1)(2)    (3)
food.splice(1, 1, 'Bananas'); // starting at index 1, delete 1 item and add 'Bananas' in it's place
console.log('splice replace Shrimp with Bananas:', food);

food.splice(2, 0, 'Sweet Potato Pie'); // add Sweet Potato Pie after Bananas
console.log('splice add Sweet Potato Pie at index 2:', food);

/*
POP
    - remove the last item of the array
*/
food.pop();  // removes the last item of the array
console.log('pop:', food);

/*
SHIFT
    - remove the first item of the array
*/
food.shift(); // removes the first item of the array
console.log('shift:', food);

/*
UNSHIFT
    - add items to the beginning of the array
*/
food.unshift('Popcorn', 'Steak'); // unshift adds 1 or more items to the beginning of the array
console.log('unshift:', food);

console.log('original array', food); // all these methods modify the original array