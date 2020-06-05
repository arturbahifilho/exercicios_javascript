// Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
// esses valores, guardando-os num vetor e depois exibindo para o usuário.
// Para esta atividade tente usar o algoritmo Bubble Sort (Método da bolha),
// pesquise sobre ele na internet.

var rs = require('readline-sync')
var n = []

for(var i = 0; i < 10; i++) {
    n[i] = rs.questionInt('Digite um valor numerico: ') 
}

var swap;
var last = n.length-1;
do{
    swap = false;
    for(var j=0 ; j<last ; j++){
        if(n[j]>n[j+1]){
            [n[j], n[j+1]] = [n[j+1], n[j]]
            swap = true
        }
    }
    last--
}while(swap){
    console.log(n)
}

