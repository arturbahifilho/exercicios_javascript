// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de
// um possuir maior idade apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade
// e inicialize essas variáveis nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade.
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos.
// Ao final o algoritmo deve iterar pelo array de alunos e descobrir quais são os alunos
// com maior idade e imprimir seus nomes.

var rs = require('readline-sync')
class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

function cadastrarAluno() { 
    var nome = rs.question('Digite o nome: ')
    var idade = rs.questionInt('Digite a idade: ')
    return new Aluno(nome, idade)
}

var alunos = []
for(var i = 0; i < 3 ; i++) {
    var aluno = cadastrarAluno()  //repetir 3 vezes a função cadastrar aluno
    alunos.push(aluno)
}
console.log(alunos)


function maiorIdadeAlunos(alunos) {
     var nomesDosAlunos = [] //criar um array para armazenar e retornar apenas o nome do aluno
     var maiorIdadeEncontrada = 0

     for(var k = 0; k < alunos.length ; k++){
        if(alunos[k].idade > maiorIdadeEncontrada) {
            maiorIdadeEncontrada = alunos[k].idade
        }
     }
     for(var j = 0; j < alunos.length ; j++) {
         if(alunos[j].idade == maiorIdadeEncontrada && alunos[j].idade >= 18) { //comparação
            nomesDosAlunos.push(alunos[j].nome)
            return nomesDosAlunos  //retornar os nomes que estão dentro do array que satisfaçam a condição
         } else {
            return 'Ninguem eh maior de idade!'
         }
     }
}

var maioresDeIdade = maiorIdadeAlunos(alunos)

console.log(maioresDeIdade)

