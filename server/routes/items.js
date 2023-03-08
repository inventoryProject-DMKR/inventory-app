const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET all items *WORKS!*
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET item by id *WORKS!*
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      res.status(404).send({ error: "Item not found" });
    } else {
      res.send(item);
    }
  } catch (error) {
    next(error);
  }
});

// CREATE a new item
router.post("/", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).send(newItem);
  } catch (error) {
    next(error);
  }
});

// // put orupdate a an item - needs completed
// router.put("/", async (req, res) => {
//   res.send("Successful PUT Request made!");
// });
// // delete an item - needs completed
// router.delete("/", async (req, res) => {
//   res.send("Successful DELETE Request made!");
// });

module.exports = router;
