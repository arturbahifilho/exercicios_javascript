// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
// volume (v = 4/3.pi.R³).
// Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.


var rs = require('readline-sync')
var raio = rs.questionFloat('Digite o raio da esfera: ')

function calcularVolume(raio) {
    const pi = Math.PI
    var volume = (4 / 3) * pi * Math.pow(raio, 3)
    return volume
}

console.log(calcularVolume(5))