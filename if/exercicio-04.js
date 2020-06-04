//As maçãs custam R$ 0,30 cada se forem compradas menos do que 12, 
//e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
//de maçãs compradas, calcule e escreva o valor total da compra

var rs = require('readline-sync')
var maca = rs.questionInt('Digite o numero de macas: ')

var totalCompra = 0

if(maca < 12) {
    totalCompra = 0.30 * maca
} else if(maca >= 12) {
    totalCompra = 0.25 * maca
}

console.log(totalCompra)