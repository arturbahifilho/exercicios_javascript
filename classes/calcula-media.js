// Criar um módulo que calcule a média de uma coleção de números.
// Para isso crie um arquivo chamado calcula-media.js.
// No módulo exporte uma função media(arr) que recebe como argumento um array de
// números.
// A função deve iterar por esses números e retornar sua média.
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3
// números, utilize o módulo criado para calcular a média e no final imprima o resultado
// para o usuário.

function calculaMedia(numerosRecebidos) { //[5,7,3,9,10]

    var soma = 0
    for(var contador = 0; contador < numerosRecebidos.length; contador++) {
    soma = soma + numerosRecebidos[contador]
    }
    var media = (soma / numerosRecebidos.length).toFixed(2)
    return media
    }
    
    module.exports = calculaMedia; //não precisa chamar a função