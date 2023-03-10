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




module.exports = router;