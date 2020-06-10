//npm = node package manager
//módulo == bibliotecas

// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
// média no final.
// Utilize o pacote : https://www.npmjs.com/package/median

//EX 1 MODULES)

 let median = require('median') //chama a biblioteca
 let rs = require('readline-sync')
 let n1 = rs.questionFloat('Digite a primeira nota: ')
 let n2 = rs.questionFloat('Digite a segunda nota: ')
 let n3 = rs.questionFloat('Digite a terceira nota: ')
 let n4 = rs.questionFloat('Digite a quarta nota: ')

 let notas = [n1, n2, n3, n4]

 let valorMediana = median(notas)

 console.log(valorMediana)



