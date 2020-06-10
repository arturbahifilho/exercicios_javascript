// Escolha um programa que você já fez em atividades passadas e faça o output do
// terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk

const chalk = require('chalk')
let ageCalculator = require('age-calculator')
let {AgeFromDate} = require('age-calculator');
 let rs = require('readline-sync')

 let ano = rs.questionInt('Digite o ano do seu nascimento: ')
 let mes = rs.questionInt('Digite o mes do seu nascimento: ')
 let dia = rs.questionInt('Digite o dia do seu nascimento: ')

 let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log(chalk.blue("A sua idade eh: " + ageFromDate + ' anos'));