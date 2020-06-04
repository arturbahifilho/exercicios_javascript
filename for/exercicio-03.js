//Faça um programa que escreva na tela os números pares entre 0 e 50, usando um
//comando For. Não utilize nenhum IF/THEN neste programa, apenas o comando For-Do.

var numeros = 50

for(var i = 0; i <= numeros; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}