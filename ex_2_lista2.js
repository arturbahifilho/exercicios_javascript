//Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
//para Fahrenheit ou Fahrenheit para Celsius.

var rs = require('readline-sync')
var opcao = rs.question('Digite c para converter de Celsius para Fahrenheit e f para converter de Fahrenheit para Celsius: ')
var graus = rs.questionInt('Digite quantos graus voce deseja converter: ')

celsius = 0
fahrenheit = 0

if(opcao == 'f') {
    celsius = (graus - 32) * (5 / 9)
    console.log('A temperatura em Celius é: ' + celsius)
} else if(opcao == 'c') {
    fahrenheit = (graus * 9 / 5) + 32
    console.log('A temperatura em Fahrenheit é: ' + fahrenheit)
} else {
    console.log('Digite uma opção: c ou f')
}