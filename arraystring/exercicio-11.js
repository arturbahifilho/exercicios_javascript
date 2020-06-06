// Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
// seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()

var rs = require('readline-sync')
var palavra = rs.question('Digite alguma palavra: ')

    if(palavra.includes('p') || palavra.includes('b')){
        for(var c = 0; c < palavra.length; c++) {
            if(palavra[c] == 'p' || palavra[c] == 'b') {
                if(palavra[c-1] == 'n') {
                    console.log('Palavra contém erro!')
                } else {
                    console.log('A palavra está correta!')
                }
                }
            } 
        } else {
            console.log('A palavra está correta!')
        } 