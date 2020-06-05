// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3

var rs = require('readline-sync')
var jogador1, jogador2, numeroA, numeroB, iguais
 jogador1 = rs.question('Digite o nome do primeiro jogador: ')
 jogador2 = rs.question('Digite o nome do segundo jogador: ')
 num1 = []
 num2 = []
 iguais = []

for(var i = 0; i < 5 ; i++){
    numeroA = rs.questionInt(jogador1 + ' Digite um numero de 1 a 10: ') //número que vai entrar no array
    num1.push(numeroA)
} 

for(var k = 0; k < 5; k++) {
    numeroB = rs.questionInt(jogador2 + ' Digite um numero de 1 a 10: ') //número que vai entrar no array
    num2.push(numeroB)

}
console.log('Jogador A: ' + numeroA)
console.log('Jogador B: ' + numeroB)

