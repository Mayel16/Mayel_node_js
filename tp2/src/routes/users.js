const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist } = require('../controllers/watchlist.js');
const {createUser, findUser } = require ('../controllers/users.js');
const {addItem, findItem } = require ('../controllers/item.js');


router.post("/create", createUser);
router.get("/create/find/:nom", findUser);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add", findItem)
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist", findWatchlist)



module.exports = router;