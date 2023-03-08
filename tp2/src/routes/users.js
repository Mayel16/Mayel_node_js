const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist, addItemToWatchlist, updateItemStatus } = require('../controllers/watchlist.js');
const {createUser, findUser } = require ('../controllers/users.js');
const {addItem, findItem } = require ('../controllers/item.js');


router.post("/create", createUser);
router.get("/create/find/:nom", findUser);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add", findItem);
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist/find/:nom", findWatchlist);
router.post("/watchlist/add", addItemToWatchlist);
router.post("/watchlist/update", updateItemStatus);



module.exports = router;