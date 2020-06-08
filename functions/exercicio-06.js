// Escreva uma função que receba dois números o primeiro será a base e o segundo a
// potência e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função,
// no final imprima o resultado.
// OBS: O algoritmo só precisa saber lidar com números inteiros.

var rs = require('readline-sync')
var b = rs.questionInt('Digite um numero para base: ')
var p = rs.questionInt('Digite outro numero para potencia: ')

function potencia(b, p) {
    var calculo = Math.pow(b, p)
    return calculo
}

console.log('o resultado eh: ' + potencia(b, p))