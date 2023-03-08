const express = require("express");
const router = express.Router();


//changed sausces to items
// different model routers
router.use('/items', require('./items'));

module.exports = router;
