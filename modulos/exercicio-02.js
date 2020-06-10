// Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

const FasamImc = require('fasam-imc-calc')
 let rs = require('readline-sync')
 
 let peso = rs.questionFloat('Digite o seu peso em Kg: ')
 let altura = rs.questionFloat('Digite a sua altura em metros: ')

 const imc =  new FasamImc(peso, altura)
 let valorImc = imc.calc()

 console.log('IMC = ' + valorImc)