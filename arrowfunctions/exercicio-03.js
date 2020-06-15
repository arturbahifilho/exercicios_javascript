// Crie um algoritmo que conte quantos carros da Ford existem no cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.

var carros = require('../arrowfunctions/cars.json')

function numeroDeCarros(carros){

    var carrosFord = carros.filter(
        function(carro){
            if(carro.Car.includes('Ford')){
                return true
            }else{
                return false
            }
        }
    )
    return carrosFord.length
}
console.log(numeroDeCarros(carros) + ' carros da marca Ford')