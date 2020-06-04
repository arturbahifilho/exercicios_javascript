//Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
//em reais a ser pago, o novo valor a ser pago por essa residência com um
//desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
//de kw gasto por residência.

var rs = require('readline-sync')
var quantidadeKw = rs.questionInt('Digite a quantidade de Kw da residencia: ')

salarioMinimo = 1045
valorCadaKw = (((1 / 7) * salarioMinimo) / 100).toFixed(2)
console.log('valor em reais de cada kw: ' + valorCadaKw)
novoValorCadaKw = ((((1 / 7) * salarioMinimo) / 100) * (1 - 10 /100)).toFixed(2)
console.log('valor em reais de cada kw com desconto de 10%: ' + novoValorCadaKw)
valorParaSerPago = (((((1 / 7) * salarioMinimo) / 100) * (1 - 10 /100)) * quantidadeKw).toFixed(2)
console.log('O novo valor a ser pago pela residencia é: ' + valorParaSerPago)