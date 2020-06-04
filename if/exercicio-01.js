//Escreva um programa para ler o ano de nascimento de uma pessoa e
//escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
//necessário considerar o mês em que ela nasceu).

var rs = require('readline-sync')
var ano = rs.questionInt('Digite o ano do nascimento: ')

var limite = 2002

if(ano >= limite) {
    console.log('Você poderá votar neste ano.')
} else {
    console.log('Você não poderá votar neste ano.')
}