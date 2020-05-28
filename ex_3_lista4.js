//Escreva um programa javascript para escrever o seguinte padrão na
//tela, com N linhas:
//*
//* *
//* * *
//* * * *
//* * * * *
//Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

var rs = require('readline-sync')
var n = rs.questionInt('Digite algum numero para N: ')

var cont = 1
var padrao = ""

while(cont <= n) {
    padrao = padrao + '*'
    console.log(padrao)
    cont++
} while(n <= 0) {
    console.log('Digite um valor maior que zero.')
    n = rs.questionInt('Digite algum numero para N: ')
} while(cont <= n) {
    padrao = padrao + '*'
    console.log(padrao)
    cont++
}
