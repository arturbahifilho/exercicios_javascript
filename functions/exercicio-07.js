// Faça uma função que recebe um número e devolve seu valor absoluto.
// No final peça um número para o usuário e exiba o valor absoluto.

var rs = require('readline-sync')
var n = rs.questionInt('Digite um numero: ')

function absoluto(n) {
    if(n < 0) {
        return n * -1
    } else {
        return n
    }
}

console.log('O valor absoluto eh: ' + absoluto(n))