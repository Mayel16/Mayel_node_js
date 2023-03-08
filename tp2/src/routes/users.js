const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist, addItemToWatchlist, updateItemStatus, findWatchlistmany } = require('../controllers/watchlist.js');
const {createUser, findUser, findUsermany } = require ('../controllers/users.js');
const {addItem, findItem } = require ('../controllers/item.js');


router.post("/create", createUser);
router.get("/create/findone/:nom", findUser);
router.get("/create/find/", findUsermany);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add/find/:nom", findItem);
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist/find/:id", findWatchlist);
router.post("/watchlist/add", addItemToWatchlist);
router.post("/watchlist/update/:id", updateItemStatus);
router.get("/watchlist/find/", findWatchlistmany);




module.exports = router;