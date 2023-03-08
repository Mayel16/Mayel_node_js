const crud = require('../services/db/crud')

// Fonction qui crée une watchlist pour un utilisateur
async function createWatchlist(req, res, next) {
    try {
        // Tester le type que l'utilisateur va saisir saisir au nv de l'id item et id user il faut que ca soit des integer et non des string
        if (typeof req.body.id_users !== 'number' || typeof req.body.id_item !== 'number') {
            return res.status(400).send('Veuillez saisir un nombre');
        }
        else {
            console.log('ok');
        }
        let test = await crud.insertOne('watchlist', req.body)
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction createWatchlist`);
        console.log(e);
        throw e;
    }
}

// Fonction qui recherche une watchlist pour un utilisateur
async function findWatchlist(req, res, next) {
    try {
        let id = req.params.nom;
        let test = await crud.findOne('watchlist', {"id_item" : id})
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
async function updateItemStatus(req, res, next) {
    try {
        let test = await crud.updateOne('watchlist', req.body)
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction updateItemStatus`);
        console.log(e);
        throw e;
    }
}

// Export des fonctions
module.exports = {
      createWatchlist,
      findWatchlist,
      addItemToWatchlist,
      updateItemStatus
};