const crud = require('../services/db/crud')

// Fonction qui ajouter un item au registre
async function addItem(req, res, next) {
    try {
        let test = await crud.insertOne('item', req.body)
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
        let test = await crud.findOne('item', {name : 'test'})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

module.exports = {
    findItem,
    addItem,
};