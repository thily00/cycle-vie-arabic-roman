const assert = require("assert");
const { convert, invertConvert } = require("../controllers/apiController");

// Test de la conversion de l'arabe en romain
assert.strictEqual(convert(3999), "MMMCMXCIX");
assert.strictEqual(convert(123), "CXXIII");

// Test de la conversion du romain en arabe
assert.strictEqual(invertConvert("MMMCMXCIX"), 3999);
assert.strictEqual(invertConvert("CXXIII"), 123);

console.log("Tous les tests ont réussi!");
