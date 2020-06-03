//Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
//transforme ela em maiúscula
//EX: abelha
//O algoritmo imprime
//AbelhA
//Dicas para esta atividade.
//Para selecionar 1 caracter da string utilizamos a função charAt :
//var nome = “oi”
//console.log(nome.charAt(0))
//console.log(nome.charAt(1))
//O algoritmo imprime:
//> o
//> i
//O número que colocamos dentro de charAt é a posição do caractere que queremos da
//string, porém o primeiro elemento é 0 e não 1.
//Sendo assim uma string de 2 elementos possui o elemento 0 e 1.
//Para cada charAt você deve concatenar isto numa string separada e exibir ela no final

var rs = require('readline-sync')
var palavra = rs.question('Digite alguma palavra: ')


var palavraSeparada = palavra.split('') //separa a string em cada caracter [p, a, l, a, v, r, a]

for(var cont = 0; cont < palavra.length ; cont++ ){
    if(palavra.charAt(cont) == 'a'){
        palavraSeparada[cont] = palavra.charAt(cont).toUpperCase()
    } 
    
}
console.log(palavraSeparada.join('')) //juntar cada caracter em string [palavra]

//SEGUNDA METODO CRIANDO VARIAVEL ''
//var rs = require('readline-sync');

// var nam = rs.question('Insira uma palavra: ');
// var nlen = nam.length;
// var pal = '';

// for(a = 0; a < nlen; a++) {
//     var nchar = nam.charAt(a);
//     if(nchar == 'a') {
//         nchar = 'A';
//     }
//     pal = pal + nchar;
// }
// console.log(pal);




