// Faça um algoritmo que verifica se uma string comece com a palavra google
// Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
// EX: entrada Google drive
// O algoritmo imprime
// Palavra valida
// Utilize o método startsWith()

var rs = require('readline-sync')
var frase = rs.question('Digite uma frase: ')

var fraseCorreta = frase.startsWith('google',0)

if(fraseCorreta == true) {
    console.log('Palavra valida')
} else {
    console.log('Nao conhece servico')
}