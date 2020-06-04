//Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
//de acordo com o número inserido.
//EX: usuário inseriu 3
//O programa imprime:
//BIP BIP
//BIP BIP
//BIP BIP

var rs = require('readline-sync')
var numero = rs.questionInt('Digite um numero: ')

var bipBip = 'BIP BIP'
var cont = 0

while(cont < numero ) {
    console.log(bipBip)
    cont++
}