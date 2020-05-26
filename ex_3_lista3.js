//Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.

var rs = require('readline-sync')
var numero = rs.questionInt('Digite um numero de 1 ate 100: ')

var impares = 0

while(impares < numero && numero <= 100) {
    impares = impares + 1
 
    console.log(impares)
    impares++
} if(numero > 100) {
    console.log('Digite um numero menor ou igual a 100')
}