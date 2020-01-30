/*
FOR EACH METHOD
    - the forEach() method executes a provided function once for each element in an array (simil
    - the forEach() method does the same thing as a for loop or for of loop - both  iterate over properties in an array
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (let i = 0; i < food.length; i++){
//     console.log(food[i]);
// }

// food.forEach(foodItem => console.log(foodItem)); // use a fat arrow function to iterate through
food.forEach((foodItem, index, array) => console.log(foodItem, index, array)); // use a fat arrow function to iterate through


// food.forEach(individualFoodItem => {
//     console.log(individualFoodItem);
// })

// food.forEach(function(fooditem){
//     console.log(fooditem);
// })

// food.forEach(function(fooditem, index){
//     console.log(index);
// })

