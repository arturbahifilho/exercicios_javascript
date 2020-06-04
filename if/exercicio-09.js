//Uma empresa abriu uma linha de crédito para os funcionários.
//O valor da prestação não pode ultrapassar 30% do salário.
//Faça um programa que receba o salário, o valor do empréstimo e o número de
//prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
//informados pode ser zero ou negativo.

var rs = require('readline-sync')
var salario = rs.questionInt('Digite o valor do salario: ')
var emprestimo = rs.questionInt('Digite o valor do emprestimo: ')
var prestacao = rs.questionInt('Digite o numero de prestacoes: ')

valorPrestacao = (emprestimo / prestacao)

if(valorPrestacao > (30 / 100) * salario){
    console.log('O empréstimo não pode ser concedido.')
}else{
    console.log('O empréstimo pode ser concedido.')
}