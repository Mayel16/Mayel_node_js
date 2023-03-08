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
        let nom = req.params.nom;
        let test = await crud.deleteOne('watchlist', {"name" : nom})
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



// Export des fonctions
module.exports = {
      createWatchlist,
      findWatchlist,
      addItemToWatchlist,
      updateItemStatus,
      findWatchlistmany,
      findWatchlistContent,
      deletewatchlist,
      notewatchlist
};