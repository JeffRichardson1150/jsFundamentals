/* 
    multiple objects with the same keys but different values
    a) keep typing objects all day long with each person's info
    b) a constructor function
        - convention is to start name with capital letter

    (1) the function keyword
    (2) the function name - for constructor functions, the name should be capitalized
    (3) the parameters - these will be the values of all the keys in the object
    (4) the 'this' keyword refers back to whatever called it, or whatever activates it. In this case, 'this' refers back to 'Person'
    (5) the keys of the new object we're creating. 
    (6) the argument we pass through our function call
    (7) & (8) the 'new' keyword creates a new instance of our 'Person' object, with the values we pass into that function when invoking it
*/
//  (1)   (2)         (3)
function Person(name, age, canVote){
//   (4) (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

//            (7)  (8)
let person4 = new Person('James', 80, true);
let person5 = new Person('Doug', 32, true);
console.log(person4);
console.log(person5);
