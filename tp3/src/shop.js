/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs 
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id 
 */
function getUser(id, usersData) {
  // implentez la fonction
  if (!Number.isInteger(id) || id < 0) {
    throw new Error("L'identifiant doit être un entier positif");
  }
  
  if (!Array.isArray(usersData)) {
    throw new Error(
      "La liste des utilisateur doit être un tableau contenant des utilisateurs"
    );
  }

  if (usersData.length === 0) {
    throw new Error("La liste des utilisateur est vide");
  }

  if (!usersData.find((user) => user.id === id)) {
    throw new Error(`L'utilisateur ${id} n'existe pas!`);
  }

  return usersData.find((user) => user.id === id);

}

// Ecrire une fonction qui retourne la liste des numéros de téléphone des utilisateurs de plus de 50 ans.
function getPhoneNumbers(usersData) {
  // implentez la fonction
  return usersData
    .filter((user) => user.age > 50)
    .map((user) => user.phone);
}

module.exports = {
  getUser,
  getPhoneNumbers
};