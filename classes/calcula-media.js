function calculaMedia(numerosRecebidos) { //[5,7,3,9,10]

    var soma = 0
    for(var contador = 0; contador < numerosRecebidos.length; contador++) {
    soma = soma + numerosRecebidos[contador]
    }
    var media = (soma / numerosRecebidos.length).toFixed(2)
    return media
    }
    
function calculaMediaIdadeAluno(alunos) {
    var somaIdade = 0
    for(var i = 0; i < alunos.length; i++) {
    somaIdade = somaIdade + alunos[i]
    }
    var mediaAlunos = (somaIdade / alunos.length).toFixed(2)
    return mediaAlunos
    }

    module.exports = calculaMedia; //não precisa chamar a função
    module.exports = calculaMediaIdadeAluno;