// Faça um programa que receba uma palavra e diga se existe vogais ou não.
// Utilize o método indexOf()

var rs = require('readline-sync')
var palavra = rs.question('Digite alguma palavra: ')

  
        if(palavra.indexOf('a') !== -1 || palavra.indexOf('e') !== -1 || palavra.indexOf('i') !== -1 || palavra.indexOf('o') !== -1 || palavra.indexOf('u') !== -1) {
            console.log(' existe vogal')
            
        } else {
            console.log('não existe vogal')
            
        }
    

  


    

    