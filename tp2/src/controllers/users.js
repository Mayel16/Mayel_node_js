const {findOne, insertOne, } = require('../services/db/crud')

// Fonction de création d'un utilisateur
async function createUser(req, res, next) {
    try {
        let test = await insertOne('users', req.body)
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction createUser`);
        console.log(e);
        throw e;
        
    }
}

// Fonction de recherche d'un utilisateur
async function findUser(req, res, next) {
    try {
        let test = await findOne('users', {name : 'mayel'})
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findUser`);
        console.log(e);
        throw e;
    }
}

// Fonction qui ajouter un item au registre
async function addItem(req, res, next) {
    try {
        let test = await insertOne('item', req.body)
        return res.send(test)

    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction addItem`);
        console.log(e);
        throw e;
        
    }
}

// Fonction qui recherche un item dans le registre
async function findItem(req, res, next) {
    try {
        let test = await findOne('item', {name : 'test'})
        return res.send(test)
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

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
        let test = await insertOne('watchlist', req.body)
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
        let test = await findOne('watchlist', {name : 'test'})
        return res.send(test)
    }
    catch (e) {
        console.log(`Erreur lors de l execution de la fonction findWatchlist`);
        console.log(e);
        throw e;
    }   
}

// Fonction qui ajoute une item dans une watchlist
/*async function addItemToWatchlist(req, res, next) {
    try {
        let test = await insertOne('watchlist', req.body)*/

// Export des fonctions
module.exports = {
      createUser,
      findUser,
      findItem,
      addItem,
      createWatchlist,
      findWatchlist

};