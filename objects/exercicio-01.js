// Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
// objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema

var rs = require('readline-sync')


var carro = {}
carro.cor = rs.question('Digite uma cor: ')
carro.modelo = rs.question('Digite um modelo: ')
carro.marca = rs.question('Digite uma marca: ')

console.log(carro)