// Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

var rs = require('readline-sync')

class Carro { //criação da classe
constructor(nome, modelo, cor){
    this.nome = nome
    this.modelo = modelo
    this.cor = cor
}
} //fechamento classe

function criarCarro() {
    var nome = rs.question('Digite o nome do carro: ')
    var modelo = rs.question('Digite o modelo do carro: ')
    var cor = rs.question('Digite a cor do carro: ')
    return new Carro(nome, modelo, cor)
}

var carro1 = criarCarro()
var carro2 = criarCarro()

function saoIguais(carroA, carroB){
    var nomesIguais = carroA.nome == carroB.nome
    var modelosIguais = carroA.modelo == carroB.modelo

    if(nomesIguais && modelosIguais){
        return true
    }
    return false
}

var carrosIguais = saoIguais(carro1, carro2)
console.log(carrosIguais)