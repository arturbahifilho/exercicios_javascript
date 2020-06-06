// Faça um programa que receba um nome e imprima a terceira letra do nome.
// Utilize o método charAt() para esta atividade.

var rs = require('readline-sync')
var palavra = rs.question('Digite alguma palavra: ')

if(palavra.length >= 3){
console.log('A terceira letra eh: ' + palavra.charAt(2))
} else {
    console.log('Digite uma palavra com pelo menos 3 letras!')
}