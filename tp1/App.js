const express = require('express')
const app = express()
const port = 3000

// ------------------------------ Hello World ------------------------------
app.get('/', (req, res) => {
  res.send('Hello World!')
})


/* -------------------------------- Question 1 : Welcome -------------------------------- */
/* Créez une route GET /welcome qui affiche le message "Bienvenue sur le TP 1 du cours d'architecture logicielle".*/

app.get('/welcome', (req, res) => {
res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle');
});

/* -------------------------------- Question 2 : Secret --------------------------------- */
/* Créez une route GET /secret qui retourne un code HTTP 401 avec le message "Vous ne possédez 
pas les droits pour accéder à ma page secrète"*/

app.get('/secret', (req, res) => {
  res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
  }
);

/* -------------------------------- Question 3 : Error ---------------------------------- */
/* Créez une route GET /error qui retourne une code HTTP 500 avec un json contenant une propriété message*/

app.get('/error', (req, res) => {
  res.status(500).send({message: 'Une erreur est survenue'});
  }
);

/* -------------------------------- Question 4 : IMG ----------------------------------- */
/* Créez une route GET /img qui permet de télécharger l'image de votre choix.*/

app.get('/img', (req, res) => {
  res.download('C:/Users/user/Documents/IUT/BUT2_S4/node.js/tp1/Mayel_node.js/node_img.webp');
  }
);

/* -------------------------------- Question 5 : Redirect Me ---------------------------- */
/*Créez une route GET /redirectMe qui redirige l'utilisateur vers le site de l'IUT.*/

app.get('/redirectme', (req, res) => {
  res.redirect('https://www.iut-littoral.fr/');
  }
);

/* -------------------------------- Question 6 : Name ----------------------------------- */
/* Créez une route GET /users/:name qui affiche le message "Bienvenue sur la page de" suivi 
de la valeur du paramètre "name".*/

app.get('/users/:name', (req, res) => {
  res.send(`Bienvenue sur la page de ${req.params.name}`);
  }
);


/* -------------------------------- Question 7 : Somme ---------------------------------- */
/* Créez une route GET /somme qui prend deux query params 'a' et 'b' et qui affiche le résultat de la somme entre a et b.
Exemple: /somme?a=1&b=4   donnera 5*/

// valeur de a et b dans l'URL: http://localhost:3000/somme?a=5&b=10
app.get('/somme', (req, res) => {
  res.send(`La somme de ${req.query.a} et ${req.query.b} est égale à${parseInt(req.query.a) + parseInt(req.query.b)}`);
  }
);

/* -------------------------------- Question 9 : Mauvaise page -------------------------- */
/* A l'aide de app.use, faites en sorte que tous les appels vers une route non supportée par notre API 
reçoivent un code HTTP 404 avec les message "Cette page n'existe pas!".*/

app.use((req, res) => {
res.status(404).send('Cette page n\'existe pas!');
});


/* ------------------------------------ Question 8 -------------------------------------- */
/* A l'aide de app.use, faites en sorte que chaque route appelée soient affichées avec l'heure de l'appel.
Exemple, un utilisateur appelle la route / puis la route /welcome. Output de la console:
[2023-01-24T21:12:02.122Z]: /
[2023-01-24T21:30:02.122Z]: /welcome
*/





/* ------------------------------------- Question 10 ------------------------------------ */
// A l'aide de app.use, et de app.get, créez une route GET /metrics qui retourne un JSON avec les informations suivantes:
/* "status": "healthy"
"requestsCount": objet contenant le nombre de requêtes total effectué sur chaque route (Ex: {"/":1, "/img":10, etc...})
"uptime": Nombre de secondes écoulées depuis le démarrage de l'api*
*/



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})