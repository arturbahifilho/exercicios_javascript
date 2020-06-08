// Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
// lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
// condição IF.

var rs = require('readline-sync')
var n = rs.questionInt('Digite um numero: ')

function ehPrimo(n){

    let d = 2
    while(d < n){
    if(n % d == 0){
        return false
    }
    d++
    }
    return true
    }
    
    console.log(ehPrimo(n))