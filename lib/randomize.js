/* Random Primitive and Complex Types Functions */

function randomInteger(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

module.exports = { randomInteger };