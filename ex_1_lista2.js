//Faça um programa que leia o valor de um produto X e leia a quantidade de reais
//de um cofrinho que contenha:
//a. N moedas de 1 real;
//b. N moedas de 50 centavos;
//c. N moedas de 25 centavos;
//d. N moedas de 10 centavos;
//e. N moedas de 5 centavos;
//f. N moedas de 1 centavos.

//O programa deverá verificar se o total de reais que contém no cofrinho é o
//bastante para compra o produto X e imprimir se possui ou não valor suficiente

var rs = require('readline-sync')
var precoProduto = rs.questionInt('Digite o preco do produto: ')
var n1 = rs.questionInt('Digite o numero de moedas de 1 real: ')
var n2 = rs.questionInt('Digite o numero de moedas de 50 centavos: ')
var n3 = rs.questionInt('Digite o numero de moedas de 25 centavos: ')
var n4 = rs.questionInt('Digite o numero de moedas de 10 centavos: ')
var n5 = rs.questionInt('Digite o numero de moedas de 5 centavos: ')
var n6 = rs.questionInt('Digite o numero de moedas de 1 centavo: ')

var total = n1 * 1 + n2 * 0.50 + n3 * 0.25 + n4 * 0.10 + n5 * 0.05 + n6 * 0.01

if(total < precoProduto) {
    console.log('Valor insuficiente!')
} else {
    console.log('Valor suficiente!')
}