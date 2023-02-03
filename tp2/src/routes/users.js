const express = require('express');
const router = express.Router();
const { createUser, addItem, createWatchlist, findUser, findItem, findWatchlist } = require('../controllers/users.js');

router.post("/create", createUser);
router.get("/create", findUser);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add", findItem)
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist", findWatchlist)



module.exports = router;