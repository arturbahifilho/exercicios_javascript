// Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
// Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
// europa e depois disso aplicar a média em cima do campo Horsepower.

var carros = require('../arrowfunctions/cars.json')
var europa = []


function calculaMediaPotencia(carros) {
    var potenciaDaEuropa = carros.filter(
        function (carro) {
            if(carro.Origin == 'Europe') {
                return (europa.push(carro.Horsepower))
            } else {
                return false
            }
        }
        
    ) //fechamento do filter
    var soma = 0
    for(var i = 0; i < europa.length; i++) {
        soma = soma + europa[i]
    } 
    var mediaPotencia = (soma / europa.length).toFixed(2)
    return  'A potencia media dos carros da Europa eh: ' + mediaPotencia

}

console.log(calculaMediaPotencia(carros))
