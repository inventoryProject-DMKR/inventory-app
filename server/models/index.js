const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

//Removes sausces
//Sauce - changed to Item
//sauces changed to items
//sauce changed to item


const Item = sequelize.define("items", {
  // name: Sequelize.STRING,
  // image: Sequelize.STRING,
  //Name, Description, Price, Category, Image - from readme
  name: {
    type: Sequelize.STRING,
    allowNull: false  //means in cant be null
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Price: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Image: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// poss need more in here please look at wikiVerse example 

module.exports = {
  db: sequelize,
  Item,
};
