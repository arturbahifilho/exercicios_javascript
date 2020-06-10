// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote : https://www.npmjs.com/package/is-odd

const isOdd = require('is-odd')
 let rs = require('readline-sync')

 let n = rs.questionInt('Digite um numero: ')

 console.log(isOdd(n))