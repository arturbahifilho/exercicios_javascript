// Faça um algoritmo que pergunta para o usuário se ele quer criptografar ou
// descriptografar.
// Utilize como criptografia a cifra de césar
// Exemplo ->
// Entrada : ARBYTE
// SAIDA: DUEBWH
// Caso o usuario opte por criptografar o algoritmo deve aplicar a cifra de césar e mostrar
// o valor criptografado
// Caso o usuário opte por descriptografar o algoritmo deve fazer a engenharia reversa e
// retorna ao valor antes de criptografia.
// Utilize todo o conhecimento até aqui pra desenvolver este algoritmo

var rs = require('readline-sync')
var querCriptografar = rs.keyInYN('Quer criptografar (S) ou descriptografar (N)?');

var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABC';
//['A', 'B', 'C', 'D' ... 'C']

//criptografar
if(querCriptografar) {
var palavra = rs.question('Digite uma palavra para criptografrar: ')
var palavraSeparada = palavra.toUpperCase().split('')

for(var i =0; i< palavra.length; i++) {
  var letra = palavraSeparada[i];
  var indiceNoAlfabeto = alfabeto.indexOf(letra); //recebe o valor de busca
  var indiceNovo = indiceNoAlfabeto + 3;
palavraSeparada[i] = alfabeto.charAt(indiceNovo);

}
  console.log('Palavra cifrada:', palavraSeparada.join(''))
} else {
//descriptografar
var palavra = rs.question('Digite uma palavra para descriptografar: ')
var palavraSeparada = palavra.toUpperCase().split('')
for(var i =0; i< palavra.length; i++) {
  var letra = palavraSeparada[i];
  var indiceNoAlfabeto = alfabeto.indexOf(letra, 3); //busca a partir do índice 3
  var indiceNovo = indiceNoAlfabeto - 3;
palavraSeparada[i] = alfabeto.charAt(indiceNovo);

}
console.log('Palavra cifrada:', palavraSeparada.join(''))
}