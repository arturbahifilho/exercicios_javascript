// Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
// o segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
// valor final). Usando o comando For, escreva na tela uma contagem que comece no
// primeiro número lido, escreva os números seguintes colocando apenas um número em
// cada nova linha da tela, até chegar ao valor final indicado.
// Entre com o Valor Inicial: 11
// Entre com o Valor Final: 13
// Contagem:
// 11
// 12
// 13
// Final da contagem...

var rs = require('readline-sync')
var n1 = rs.questionInt('Digite o valor inicial: ')
var n2 = rs.questionInt('Digite o valor final: ')


if(n1 > n2) {
    console.log('Digite um valor maior para o valor final!')
} else {
    for(var i = n1; i <= n2; i++) { 
        
        console.log(i)    
}
console.log('Final da contagem...')
}
