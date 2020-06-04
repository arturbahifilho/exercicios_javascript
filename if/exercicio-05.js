// um programa para ler 3 valores inteiros (considere que não
//serão lidos valores iguais) e escrevê-los em ordem crescente.

var rs = require('readline-sync')
var n1 = rs.questionInt('Digite o primeiro valor: ')
var n2 = rs.questionInt('Digite o segundo valor: ')
var n3 = rs.questionInt('Digite o terceiro valor: ')


var numeroMeio = 0
var numeroMaior = 0
var numeroMenor = 0

if(n1 < n2 && n1 < n3 ){
    numeroMenor = n1
    if(n2 > n3) {
        numeroMeio = n3
        numeroMaior = n2
    } else {
        numeroMeio = n2
        numeroMaior = n3

    }

} else if(n2 < n1 && n2 < n3) {
    numeroMenor = n2
    if(n1 > n3) {
    numeroMeio = n3
    numeroMaior = n1
    }
    else {
        numeroMeio = n1
        numeroMaior = n3
    }
} else {
    numeroMenor = n3
    if(n1 > n2) {
        numeroMeio = n2
        numeroMaior = n3
    } else {
        numeroMeio = n3
        numeroMaior = n2
    }
}
console.log(numeroMenor,numeroMeio,numeroMaior)