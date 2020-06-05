// Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
// palavra tem.
// EX : saúde
// 2 consoantes
// 3 vogais


var rs = require('readline-sync')
var palavra = rs.question('Digite alguma palavra: ')
var vogal = []
var consoante = []


for(var i = 0; i < palavra.length; i++) {
    if(palavra.charAt(i) == 'a' || palavra.charAt(i) == 'e' || palavra.charAt(i) == 'i' || palavra.charAt(i) == 'o' || palavra.charAt(i) == 'u' ) {
        vogal.push(palavra.charAt(i))
    } if(palavra.charAt(i) !== 'a' && palavra.charAt(i) !== 'e' && palavra.charAt(i) !== 'i' && palavra.charAt(i) !== 'o' && palavra.charAt(i) !== 'u' ) {
        consoante.push(palavra.charAt(i))
    }
}

for(var v = 0; v < vogal.length; v++){
    
}
console.log(v + ' vogais')

for(var c = 0; c < consoante.length; c++){
    
}
console.log(c + ' consoantes')



