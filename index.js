// Write your solution in this file!
console.log ("Welcome to Flatburger");

// Step 1: Global Scope
let burgers =["Hamburger", "Cheeseburger"];
let featuredDrinks = ['Strawberry Milkshake']
  
// Step 2: Function and Function scope
 function addBurger () {
 let newBurger = "Flatburger"; //function-scoped
    burgers.push(newBurger);
 }

// Step 3: Block scope
if(true) {
    let anothernewBurger = "Maple Bacon Burger";
    burgers.push(anothernewBurger);

    // Step 4: Function to change the featured drinks
    function changeFeatureDrinks () {
        featuredDrinks = ("The JavaShake");
    }
}

console.log(burgers);
addBurger();
console.log(burgers);
console.log(featuredDrinks);
changeFeatureDrinks();
console.log(featuredDrinks);