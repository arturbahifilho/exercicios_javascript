// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador B colocou diferente do A.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 8,7

var rs = require('readline-sync')
var jogador1, jogador2, numeroA, numeroB, diferentes
jogador1 = rs.question('Digite o nome do primeiro jogador: ')
jogador2 = rs.question('Digite o nome do segundo jogador: ')
numeroA = []
numeroB = []
diferentes = []

for (var i = 0; i < 5; i++) {
    var num1 = rs.questionInt(jogador1 + ' Digite um numero de 1 a 10: ') 
    numeroA.push(num1) //número que vai entrar no array
}

for (var k = 0; k < 5; k++) {
    var num2 = rs.questionInt(jogador2 + ' Digite um numero de 1 a 10: ')
    numeroB.push(num2)  //número que vai entrar no array
}
console.log(jogador1 + ': ' + numeroA)
console.log(jogador2 + ': ' + numeroB)


    for (var j = 0; j < numeroB.length; j++) {
        numeroA.toString() //transforma o array de números em string

        if (numeroA.includes(numeroB[j]) ) { //includes verifica se a string (numeroA) contém algum número da array numeroB
            
        } else {
            diferentes.push(numeroB[j])
        }
    }

console.log(diferentes)