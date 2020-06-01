//Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
//o maior e o menor, sem levar em consideração o -1

var rs = require('readline-sync')
var n = rs.questionInt('Digite algum numero: ')

var maior =  0
var menor = n

while(n !== -1) {
    n = rs.questionInt('Digite algum numero: ')

 if(n !== -1){
    if(n > maior) { //o sinal > identifica o número com maior valor acima de 0
        maior = n
    
    } else if(n < menor) { //o sinal < identifica o número com menor valor abaixo de 0
        menor = n
    }
}

}

console.log('O maior numero eh: ' + maior)
console.log('O menor numero eh: ' + menor)
