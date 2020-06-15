// Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
// Utilize o campo Horsepower para descobrir qual é o mais potente

var carros = require('../arrowfunctions/cars.json')
var lista = []
var potente = 0
var listaPotencia = []
var nomeDoCarro = []

function maiorPotencia(carros) {
    var potenciaMaxima = carros.filter(
        function (carro) {
            if(carro.Origin == 'Europe' || carro.Origin == 'US' || carro.Origin == 'Japan' ) {
                lista.push(carro.Horsepower)
            }
        }
    )

    for(var i = 0; i < lista.length; i++) {
        if(lista[i] > potente){
            potente = lista[i]
        }
    }
    for(var j = 0; j < lista.length; j++) {
        if(lista[j] == potente) {
            listaPotencia.push(lista[j])
        }
    }
        }

        function nomePotencia(carros) {
            var nomeMaxima = carros.filter(
                function (carro) {
                    if(carro.Horsepower == listaPotencia.join('') ) {
                        nomeDoCarro.push(carro.Car)
                    }
                }
            )
        }

    maiorPotencia(carros)
    console.log(listaPotencia)
    
    nomePotencia(carros)
    console.log(nomeDoCarro)


    
   
