//Faça um programa que receba um número do usuário e verifique se
//este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

var rs = require('readline-sync')
var numero = rs.questionInt('Digite o numero: ')

if(numero % 2 == 0) {
    console.log('o número é PAR')
} else {
    console.log('o número é ÍMPAR')
}