//Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
//usar o operador de multiplicação (*)

var rs = require('readline-sync')
var n1 = rs.questionInt('Digite o primeiro numero: ')
var n2 = rs.questionInt('Digite o segundo numero: ')

var resultado = 0
var cont = 0

while(cont < n2) {
    resultado = resultado + n1
    
    cont++
} 
console.log(resultado)