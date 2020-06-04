// Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
// exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
// programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
// se o valor for menor informar que a compra vai ser cancelada.
// EX entradas :
// 0.75
// 0.25
// 2.50
// Valor total pago: 5.00
// O programa imprime :
// Produto 1 - 0.75
// Produto 2 - 0.25
// Produtos 3 - 2.50
// Total da compra : 3.50 $
// Troco : 1.50 $

var rs = require('readline-sync')
var produto = rs.questionInt('Digite a quantidade de produtos que deseja cadastrar: ')

var valorTotal = 0
var troco = 0

for(var i = 0; i < produto; i++){
    var preco = rs.questionFloat('Digite o preco do(s) produto(s): R$ ')
    valorTotal = valorTotal + preco
}
console.log('O valor total é: R$ ' + valorTotal)

var valorPago = rs.questionFloat('Digite o valor a ser pago na compra: R$ ')

if(valorPago >= valorTotal){
    troco = (valorPago - valorTotal).toFixed(2)
    console.log('O troco é: R$ ' + troco)
} else {
    console.log('A compra vai ser cancelada.')
}



