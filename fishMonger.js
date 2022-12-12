/* 
This module must import and invoke the function that is exported by the fishing boat module. 
This module should also define and export its own function that generates its own 
inventory that restaurants can use to purchase fish for their daily menus. 
The returned inventory should be an array of objects.

The exported function must be named mongerInventory.

    1. Each day, the fishmonger buys exactly 10 of each inexpensive (see below) 
    fish caught by the fishing boat. If any of the fishing boat's fish quantity 
    is less than 10, the fish monger does not buy it.
    2. The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
    3. The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. 
    For example, a chef can tell the monger that she can only spend $5.00 per fish. 
    The function should then return only fish that cost $5.00 or less.
    4. Each fish object provided by the fish monger should have a quantity of 10 instead of 
    the original quantity from the fishing boat.
*/

const { boatInventory } = require("./fishingBoat");

const mongInv = boatInventory()

//declare a function that iterates through our list of fish to find the fish that have a quantity of more than or equal 10, are less than 7.50, and are less than or equal to the chef's price.
//declare a function that has one parameter for how much the chef wants to pay for the fish
const mongerInventory = (chefPrice) => {
// in the function, declare an empty array that will hold all of the fish objects that meet the criteria    
    const purchaseFish = []
// use for... of to iterate through each fish object in the variable declared at the top that holds the array of all fish objects    
    for (fish of mongInv) {
// use an if statement to find the fish that have more than 10, cost less than 7.50 and cost less or equal to how much the chef wants to pay
        if (fish.amount >= 10 && fish.price <= 7.50 && fish.price <= chefPrice) {
// of those fish that meet the criteria, change the amount of fish to 10
            fish.amount = 10
// push the individal fish that meet the criteria to the empty array created at the start of the function
            purchaseFish.push(fish)
        }
    }
// return the array
    return purchaseFish
};


// const chefInventory = mongerInventory(5.00);
// console.log(chefInventory);

module.exports = {mongerInventory};
