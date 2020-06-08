// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.

var rs = require('readline-sync')
var a = rs.questionInt('Digite um numero: ')
var b = rs.questionInt('Digite outro numero: ')

function menorNumero(a, b) {
    if(a > b) {
        return b
    } else {
        return a
    }
  
}


console.log('o menor numero eh: ' + menorNumero(a, b))