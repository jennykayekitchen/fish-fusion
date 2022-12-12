/* This module must import and invoke the function that is exported by the fish monger module. 
This module should also define a function that build an HTML version of their daily menu. 
The function should return the generated HTML string. The function must be named fishMenu.

Each day, the chef visits the monger and specifies the maximum price she is able to spedn per fish.
If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. 
For example, if tuna was bought, the following meals will be on the menu.
Tuna Soup
Tuna Sandwich
Grilled Tuna

Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/

const { mongerInventory } = require("./fishmonger.js")

// const chefFish = mongerInventory()

const fishMenu = (price) => {
// define a function that will take the items that met the monger's criteria and use the information to build an HTML menu.
    const chefFish = mongerInventory(price)
// console.log the start of the HTML
    console.log(`<h1>Menu</h1>`)
    console.log(`<article class="menu">`)
// iterate through each of the fish that met the monger's criteria that are stored in the new variable menuItems
        for (fish of chefFish) { 
// add the HTML code using dot notation and tics and +=
        console.log(`<h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
        `)
        }
    console.log(`</article>`)
    return
};

// fishMenu()


// console.log(finalMenu);

module.exports = {fishMenu};
