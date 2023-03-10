/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne la somme de a et b
 */
function addition(a, b) {
  // implentez la fonction
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Mauvais type!");
  }

  return a + b;
}

/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne le quotient de a et b
 */
function quotient(a, b) {
  // implentez la fonction
  if (b === 0) {
    throw new Error("Division par 0 impossible");
  }
  console.log(typeof a)
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Les paramètres doivent être des nombres");
  }

  return a / b;

}

module.exports = {
  addition,
  quotient,
};