const {sauces, items} = require('./seedData.js');
// not sure if we need the sauces above
const {sequelize} = require('./db');
const {Item} = require('./models');

//Sauce - changed to Item
//sauces changed to items
//sauce changed to item

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
