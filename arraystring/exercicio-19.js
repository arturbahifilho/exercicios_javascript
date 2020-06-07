// Faça um algoritmo que receba um texto e remova todos os espaços em brancos no
// começo e no final do texto
// Utilize o método trim()

var rs = require('readline-sync')
var frase = rs.question('Digite uma frase: ')

console.log(frase.trim())