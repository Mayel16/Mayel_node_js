const crud = require('../services/db/crud')
const axios = require ('axios')

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

// Fonction qui recherche un item dans le registre avec un filtre sur le nom 
async function findItem(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.find('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

// Fonction qui supprime un item 
async function deleteItem(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.deleteOne('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

// Fonction qui supprime plusieurs item avec le même nom
async function deleteItemMany(req, res) {
    try {
        let nom = req.params.nom;
        let test = await crud.deleteMany('item', {"name" : nom})
        return res.send(test)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}

// Fonction qui récupère des items de l'API
async function getItemsfromAPI(req, res) {
    try {
        let test = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9a78a4e7')
        return res.send(test.data)
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findItem`);
        console.log(e);
        throw e;
    }
}



module.exports = {
    findItem,
    addItem,
    deleteItem,
    deleteItemMany,
    getItemsfromAPI
};