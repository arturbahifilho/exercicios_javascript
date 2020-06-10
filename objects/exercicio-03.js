// Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o
// arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.
// Após isso imprima os valores lidos do json do arquivo.
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo
// mudados a cada execução.

var rs=require('readline-sync')
var fs=require('fs')
var jsons=fs.readFileSync('carro.json')
var carro=JSON.parse(jsons)

carro.cor=rs.question('Digite a cor: ')
carro.modelo=rs.question('Digite o modelo: ')
carro.marca=rs.question('Digite a marca: ')
console.log(carro)

var carroSerializado= JSON.stringify(carro)

fs.writeFileSync('carro.json',carroSerializado)