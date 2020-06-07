// Faça um algoritmo que receba um texto e imprima ele em letra minuscula novamente.
// Utilize o método toLowerCase()

var rs = require('readline-sync')
var frase = rs.question('Digite uma frase: ')

console.log(frase.toLocaleLowerCase())