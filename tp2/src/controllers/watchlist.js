const crud = require('../services/db/crud')

async function createWatchlist(req, res, next) {
    try {
        let test = await crud.insertOne('watchlist', req.body)
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction createUser`);
        console.log(e);
        throw e;
        
    }
}

// Fonction qui recherche une watchlist pour un utilisateur
async function findWatchlist(req, res, next) {
    try {
        let id = req.params.id;
        let test = await crud.findOne('watchlist', {"id_item" : id})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlist`);
        console.log(e);
        throw e;
    }   
}

// Récupération de la liste des watchlist
async function findWatchlistmany(req, res, next) {
    try {
        let test = await crud.find('watchlist')
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlist`);
        console.log(e);
        throw e;
    }   
}

// Add item to watchlist
async function addItemToWatchlist(req, res, next) {
    try {
        let test = await crud.insertOne('watchlist', req.body)
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction addItemToWatchlist`);
        console.log(e);
        throw e;
    }
}

// Modifier le statut d'un item dans une watchlist
async function updateItemStatus(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "status": req.body.status, "id_users": req.body.id_users, "id_item": req.body.id_item }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateItemStatus`);
        console.log(e);
        throw e;
    }
}

// Récupéré le contenu d'une watchlist
async function findWatchlistContent(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.findOne('watchlist', {"id_item" : id})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlistContent`);
        console.log(e);
        throw e;
    }
}

// Supprimer une watchlist

async function deletewatchlist(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.deleteOne('watchlist', {"id_item" : id})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

// Ajouter une watchlist en favoris
// async function addWatchlistToFavorites(req, res) {
//     try {
//         let test = await crud.insertOne('watchlist', req.body)
//         return res.send(test)
//     }
//     catch (e) {
//         console.log(`Erreur lors de l execution de la fonction addWatchlistToFavorites`);
//         console.log(e);
//         throw e;
//     }
// }

// Partager sa watchlist avec un autre utilisateur

// Donner la possibilité d'écrire une note personnelle sur une watchlist ou un item d'une watchlist.
async function notewatchlist(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.updateOne('watchlist', {"id_item" : id },{$set: { "note": req.body.note }})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction notewatchlist`);
        console.log(e);
        throw e;
    }
}

// Ajouter une watchlist en favoris
async function addfavorisWatchlist(req, res) {
    try {
        let id = req.params.id;
        let test = await crud.insertOne('favoris', {"id_item_fav" : id },{$set: {"id_users_fav": req.body.id_users}})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction addfavorisWatchlist`);
        console.log(e);
        throw e;
    }
}


// Export des fonctions
module.exports = {
      createWatchlist,
      findWatchlist,
      addItemToWatchlist,
      updateItemStatus,
      findWatchlistmany,
      findWatchlistContent,
      deletewatchlist,
      notewatchlist,
      addfavorisWatchlist
};