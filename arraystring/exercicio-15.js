// Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
// dessa palavra e imprime a palavra novamente porém sem as vogais.
// EX: Entrada banana
// O algoritmo imprime :
// Bnn
// Utilize o método split() para quebrar a string e depois montar ela sem vogais.

var rs=require('readline-sync')
var palavra=rs.question('Digite uma palavra: ')
var final=[]
var f = 0

for(var i=0; i < palavra.length ; i++){
if(palavra[i]=='a'|| palavra[i]=='e' || palavra[i]=='i'|| palavra[i]=='o'|| palavra[i]=='u'){
}else{final.push(palavra[i])}
}
f=final.join('')
console.log(f)

