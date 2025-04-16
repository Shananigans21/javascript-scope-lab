// Write your solution in this file!
console.log ("Welcome to Flatburger");

// Step 1: Global Scope
const burgers =["Hamburger", "Cheeseburger"];
const featuredDrinks = 'Strawberry Milkshake'
  
// Step 2: Function and Function scope
 function addBurger () {
 const newBurger = "Flatburger"; //function-scoped
    burgers.push(newBurger); //Adds "Flatburger" to the burgers array
 }

// Step 3: Block scope
if(true) {
    const anothernewBurger = "Maple Bacon Burger";
    burgers.push(anothernewBurger); //Adds "Maple Bacon Burger" to the burgers array

    // Step 4: Function to change the featured drinks
    function changeFeatureDrinks () {
        console.log ("Featured drink changed to The JavaShake"); //Example of a function
    }
}
// Testing the functions
console.log(burgers); // ["Hamburger", "Cheeseburger"]
addBurger(); // Adds "Flatburger" to the burgers array
console.log(burgers); // ["Hamburger", "Cheeseburger","Flatburger"]
console.log(featuredDrinks); // 'Strawberry Milkshake'
changeFeatureDrinks(); // Calls the function to change featured drink
console.log(featuredDrinks); //"The JavaShake" 