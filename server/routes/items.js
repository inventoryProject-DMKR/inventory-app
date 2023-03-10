const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});


// GET item by id *WORKS!*
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      res.status(404).send({ error: 'Item not found' });
    } else {
      res.send(item);
    }
  } catch (error) {
    next(error);
  }
});


/  create /post
//*****works*****
const { body, validationResult } = require('express-validator');//gives us the option to validate input
// think this path may need updated
router.post("/",
//checks if title, price, description, category and image are NOT empty
//may be a less repetitive way of doing this...? body ('title', 'price' etcccc)
body('title').not().isEmpty(),
body('price').not().isEmpty(),
body('description').not().isEmpty(),
body('category').not().isEmpty(),
body('image').not().isEmpty(),
async (req, res) => {
  //check for erros nd return status
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newItem = await Item.create(req.body);
      res.status(200).send({ msg: "Success", newItem });
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  });


// Delete works - but isnt perfect - give successfull message when nothing to delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = Item.destroy({ where: { id: req.params.id } });
    // if (deletedItem) {
      res.status(200).send({ msg: "Success", deletedItem });
    // } else {
    //   throw new Error("Not deleted");
    // }
  } catch (error) {
    res.status(500).send({ err: error.message });
    
    

module.exports = router;
