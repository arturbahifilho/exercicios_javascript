// Faça um algoritmo que receba um texto e imprima ele em letra maisucula novamente.
// Utilize o método toUpperCase()

var rs = require('readline-sync')
var frase = rs.question('Digite uma frase: ')

console.log(frase.toUpperCase())