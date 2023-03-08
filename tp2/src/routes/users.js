const express = require('express');
const router = express.Router();
const { createWatchlist, findWatchlist, addItemToWatchlist, updateItemStatus, 
    findWatchlistmany, findWatchlistContent, deletewatchlist, notewatchlist } = require('../controllers/watchlist.js');
const {createUser, findUser, findUsermany, updateUser } = require ('../controllers/users.js');
const {addItem, findItem, deleteItem, deleteItemMany  } = require ('../controllers/item.js');


router.post("/create", createUser);
router.get("/create/findone/:nom", findUser);
router.get("/create/find/", findUsermany);
router.post("/create/update/:nom", updateUser);
// --------------------------------------------
router.post("/add", addItem);
router.get("/add/find/:nom", findItem);
router.get("/add/delete/:nom", deleteItem);
router.get("/add/deletemany/:nom", deleteItemMany);
// --------------------------------------------
router.post("/watchlist", createWatchlist);
router.get("/watchlist/find/:id", findWatchlist);
router.post("/watchlist/add", addItemToWatchlist);
router.post("/watchlist/update/:id", updateItemStatus);
router.get("/watchlist/find/", findWatchlistmany);
router.get("/watchlist/findcontent/:id", findWatchlistContent);
router.get("/watchlist/delete/:id", deletewatchlist);
router.post("/watchlist/note/:id", notewatchlist);





module.exports = router;