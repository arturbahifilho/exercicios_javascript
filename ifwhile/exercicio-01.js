//Escreva um programa que pedirá para o usuário dois números entre 1
//e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
//imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
//o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
//por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
//programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
//precise fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
//input do usuário de string para inteiro.

var rs = require('readline-sync')
var n1 = rs.questionInt('Digite um numero entre 1 e 100: ')
var n2 = rs.questionInt('Digite outro numero entre 1 e 100: ')

var numero = 1
var divisivel7 = 'Ping'
var divisivel5 = 'Pong'
var divisivel7E5 = 'Ping Pong'

while(numero <= n1 || numero <= n2) {
    if(numero % 7 == 0 && numero % 5 == 0) {
        
        console.log(divisivel7E5)
    } else if(numero % 5 == 0) {
        
        console.log(divisivel5)
    } else if (numero % 7 == 0) {
         
        console.log(divisivel7)
    } else {
        console.log(numero)
    }
    numero++
}
