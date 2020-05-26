//Faça um programa que recebe um número e imprima todos os números pares de 0 até
//o número inserido.
//Ex: usuário inseriu 8
//O programa imprime
//0
//2
//4
//6
//8

var rs = require('readline-sync')
var numero = rs.questionInt('Digite um numero: ')

var par = 0

while( par <= numero) {
    console.log(par)
    par = par + 1
    par++
}