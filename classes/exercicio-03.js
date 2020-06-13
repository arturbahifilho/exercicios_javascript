var bibliotecaDeMedia = require('./calcula-media')
var rs = require('readline-sync')
 var n1 = rs.questionFloat('Digite o primeiro numero: ')
 var n2 = rs.questionFloat('Digite o segundo numero: ')
 var n3 = rs.questionFloat('Digite o terceiro numero: ')

console.log('A media eh: ' + bibliotecaDeMedia([n1, n2, n3]))