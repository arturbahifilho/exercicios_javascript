//Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
//o maior e o menor, sem levar em consideração o -1

var rs = require('readline-sync')
var n = rs.questionInt('Digite algum numero: ')

var maior =  Math.max(n)
var menor = Math.min(n)

while(n !== -1) {
    n = rs.questionInt('Digite algum numero: ')
}if(n == -1) {
    n == maior
    console.log(maior)
    n == menor
    console.log(menor)
    
}
