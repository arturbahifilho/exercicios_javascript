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

var aluno1 = cadastrarAluno()
var aluno2 = cadastrarAluno()
var aluno3 = cadastrarAluno()

function maiorIdade(alunoA, alunoB, alunoC){
    var idadeMaiorA = alunoA.idade > alunoB.idade && alunoA.idade > alunoC.idade && alunoA.idade > 18
    var idadeMaiorB = alunoB.idade > alunoA.idade && alunoB.idade > alunoC.idade && alunoB.idade > 18
    var idadeMaiorC = alunoC.idade > alunoA.idade && alunoC.idade > alunoB.idade && alunoC.idade > 18
    

    if(idadeMaiorA) {
        return 'O aluno ' + alunoA.nome + ' eh maior de idade e possui mais de 18 anos!'
    } else if(idadeMaiorB) {
        return 'O aluno ' + alunoB.nome + ' eh maior de idade e possui mais de 18 anos!'
    } else if(idadeMaiorC) {
        return 'O aluno ' + alunoC.nome + ' eh maior de idade e possui mais de 18 anos!'
    } else {
        return 'Nenhum aluno eh maior de idade!'
    }

}

var maiorIdadeAlunos = maiorIdade(aluno1, aluno2, aluno3)

console.log(maiorIdadeAlunos)