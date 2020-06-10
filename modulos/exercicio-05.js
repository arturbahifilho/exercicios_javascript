// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

let ageCalculator = require('age-calculator')
let {AgeFromDate} = require('age-calculator');
 let rs = require('readline-sync')

 let ano = rs.questionInt('Digite o ano do seu nascimento: ')
 let mes = rs.questionInt('Digite o mes do seu nascimento: ')
 let dia = rs.questionInt('Digite o dia do seu nascimento: ')

 let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log("A sua idade eh: " + ageFromDate + ' anos');