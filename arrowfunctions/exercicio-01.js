// Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
// potente que o valor informado.
// Para isso utiliza a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.

var rs = require('readline-sync')
var carros = require('../arrowfunctions/cars.json')
var hp = rs.questionInt('Qual o minimo HP dos carros? ')

var carrosComHpMinimo = carros.filter(

    (carro) => carro.Horsepower >= hp)
    
    console.log(carrosComHpMinimo.length + ' carro(s)')
    
    // function numeroDecarros(minimohp, carros){    
    //    
    //    var carrosComHpMinimo=carros.filter(
    //        function(carro){
    //            if(carro.Horsepower>=minimohp){
    //                return true;
    //            }else{
    //                return false;
    //            }
    //        }
    //    );
    //     return carrosComHpMinimo.length;
    // }
    // console.log(numeroDecarros(hp,carros))