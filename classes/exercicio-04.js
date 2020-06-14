// Criar uma função que receba uma coleção de alunos e calcule a média de idade
// Adicione uma nova função no arquivo calcula-media.js chamada
// calculaMediaIdadeAluno(alunos).
// A função deve receber um array da mesma classe dos alunos criada na atividade 2.

// Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.
// Adicione essa função para ser exportado pelo módulo.
// Adicione no final do programa da atividade 2 após informar o nome dos alunos com
// maior idade também imprimir a média de idade dos alunos utilizando o método
// calculaMediaIdadeAluno(alunos)

var bibliotecaDeMediaAlunos = require('./calcula-media')
var rs = require('readline-sync')
 var n1 = rs.questionInt('Digite a idade do primeiro aluno: ')
 var n2 = rs.questionInt('Digite a idade do segundo aluno: ')
 var n3 = rs.questionInt('Digite a idade do terceiro aluno: ')

console.log('A media da idade eh: ' + bibliotecaDeMediaAlunos([n1, n2, n3]))