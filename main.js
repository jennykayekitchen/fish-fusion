const { fishMenu } = require("./restaurant.js")
const { boatInventory } = require("./fishingBoat.js")
const { mongerInventory } = require("./fishMonger.js")
//Uncomment this code block when you're ready to test your logic

const menu = fishMenu(5.00)
console.log(menu)