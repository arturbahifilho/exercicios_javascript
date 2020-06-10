// Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
// em formato JSON.
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
// métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

var rs = require('readline-sync')
var fs = require('fs')

var carro = {}
carro.cor = rs.question('Digite uma cor: ')
carro.modelo = rs.question('Digite um modelo: ')
carro.marca = rs.question('Digite uma marca: ')

carroSerializado = JSON.stringify(carro)
fs.writeFileSync('carro.json', carroSerializado)

console.log(carro)