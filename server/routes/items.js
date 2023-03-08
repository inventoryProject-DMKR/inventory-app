const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET all items  ******WORKS!*****
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// ****NEEDS FIXED******GET item by id - not complete - do i need to put "/id" and/or findByPK(id)
router.get("/", async (req, res) => {
  try {
    const items = await Item.findByPk();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//create a new item - needs completed
router.post("/", async (req, res) => {
  res.send("Successful POST Request made!");
});

// put orupdate a an item - needs completed
router.put("/", async (req, res) => {
  res.send("Successful PUT Request made!");
});
// delete an item - needs completed
router.delete("/", async (req, res) => {
  res.send("Successful DELETE Request made!");
});

module.exports = router;
