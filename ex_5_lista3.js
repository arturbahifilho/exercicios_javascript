//Faça um programa que calcule a potência (potenciação) de um número.
//Para isso ele deve receber dois números de entrada: o primeiro número é a base da
//potência, o segundo número será a potência.
//EX: usuário inseriu 2 para base e 4 para potência.
//O programa imprime: 16
//Lembrando: 2^4 = 2*2*2*2

var rs = require('readline-sync')
var numero = rs.questionInt('Digite um numero: ')
var potencia = rs.questionInt('Digite a potencia: ')

var resultado = numero
var cont = 1

while(cont < potencia) {
    resultado = resultado * numero
    
    cont++
    
} if(potencia == 0) {
    resultado = 1
    
}

console.log(resultado)