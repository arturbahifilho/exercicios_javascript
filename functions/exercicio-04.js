// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
// tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a
// função.

var rs = require('readline-sync')
var n = rs.questionInt('Digite um numero: ')
var tabu = []
var j = 0

function tabuada(n) {
    for( var i = 1; i <= n; i++){
        j = i * n
        tabu.push(j)
    }
    z = console.log(tabu)
    return z
}
console.log(tabuada(n))
