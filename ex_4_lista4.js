//Escreva um programa que calcule a soma de todos os múltiplos de 3
//e de 5 entre 1 e 1000.

var cont = 0
var somaDiv5 = 0
var somaDiv3 = 0


while(cont < 1000) { //múltiplo de 5
    
    
    if(cont % 5 == 0){
        somaDiv5 = somaDiv5 + cont
        
    } else if(cont % 3 == 0) {
        somaDiv3 = somaDiv3 + cont
    }
    
    cont++
}

console.log(somaDiv5 + somaDiv3)