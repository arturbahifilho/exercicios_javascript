// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
// essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
// utilizando a função criada.

var rs = require('readline-sync')
var ano = rs.questionInt('Digite a quantidade de anos: ')
var mes = rs.questionInt('Digite a quantidade de meses: ')
var dia = rs.questionInt('Digite a quantidade de dias: ')

function idade(ano, mes, dia) {

    var calculoIdade = (dia + (30 * mes) + (ano * 30 * 12) )
    return calculoIdade
}

console.log(idade(ano ,mes, dia) + ' dias')

