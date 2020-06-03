// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
// entre estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
// procedimento para uma turma composta por cinco alunos, usando o comando For.
// Exemplo de tela de saída:
// Entre com o nome do aluno: João da Silva
// Entre com o grau A: 5.0
// Entre com o grau B: 6.0
// O aluno João da Silva tem uma média: 5.7

var rs = require('readline-sync')
var nome = 0
var notaA = 0
var notaB = 0
var media = 0
var turma = 5
var alunos = 5

for(var i = 0; i < alunos; i++){

        nome = rs.question('Entre com o nome do aluno: ')
        notaA = rs.questionInt('Entre com o grau A: ')
        notaB = rs.questionInt('Entre com o grau B: ')
    
    media = (0.30 * notaA + 0.70 * notaB).toFixed(2)
    
    console.log('o aluno ' + nome + ' tem uma media: ' + media)
}