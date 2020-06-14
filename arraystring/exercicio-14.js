// Faça um programa que receba uma string, o programa vai estar esperando uma data no
// formato dd/MM/yyyy onde :
// a. dd -> dia
// b. mm -> mês
// c. yyyy -> ano
// Utilize o método match() para fazer essa validação, você deverá utilizar um expressão
// regular para resolver este problema.
// Caso a data esteja valida o algoritmo deve imprimir :
// Entrada -> 22/05/2020
// O algoritmo imprime :
// Dia : 22
// Mes : 05
// Ano : 2020

var rs = require('readline-sync')
var data = rs.question('Digite uma data no formato 00/00/0000: ')

var dia = data.match(/(\d\d)/)
console.log('Dia: ' + dia[0]) //pegar o dia apenas 1 vez
data = data.substring(dia['index'] + 3)

var mes = data.match(/(\d\d)/)
console.log('Mes: ' + mes[0])
data = data.substring(mes['index'] + 3)

var ano = data.match(/(\d\d\d\d)/)
console.log('Ano: ' + ano[0])
data = data.substring(ano['index'] + 3)

