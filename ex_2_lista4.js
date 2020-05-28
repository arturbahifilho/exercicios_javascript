//Escreva um programa que passe por todos os números de 1 a 50 e
//para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
//também seja primo, o programa deve dizer que ele é primo. (um número primo é um
//número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
//precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
//um loop.
//EX.:
//1 ÍMPAR PRIMO
//2 PAR PRIMO
//3 ÍMPAR PRIMO
//4 PAR
//5 ÍMPAR PRIMO
//6 PAR
//7 ÍMPAR PRIMO
//8 PAR
//9 ÍMPAR
//10 PAR
//...

var numeros = 50
var cont = 1
var ehPrimo = true
var divisor = 2

while(cont <= numeros) {
    ehPrimo = true
    divisor = 2

    while(divisor < cont ){
        if(cont % divisor == 0 ) {
            ehPrimo = false
        } 
        divisor++
        }

    if(ehPrimo) { //variável ehPrimo já declarada como verdadeira!
        if(cont % 2 == 0) {
            console.log(cont + ' PAR PRIMO')
        } else {
            console.log(cont + ' ÍMPAR PRIMO')
        }
    } else if(cont % 2 !== 0) {
        console.log(cont + ' ÍMPAR')
    } else if(cont % 2 == 0) {
        console.log(cont + ' PAR')
    }
    cont++
}