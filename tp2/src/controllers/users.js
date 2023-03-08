const crud = require('../services/db/crud')

// Fonction de création d'un utilisateur
async function createUser(req, res, next) {
    try {
        let test = await crud.insertOne('users', req.body)
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
        let nom = req.params.nom;
        let test = await crud.findOne('users', {"name" : nom})
        return res.send(test)
        
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findUser`);
        console.log(e);
        throw e;
    }
}

module.exports = {
    createUser,
    findUser,
};