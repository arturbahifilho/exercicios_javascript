// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const dadoAleatorio = 'https://yesno.wtf/api'

const axios = require('axios')
const rs = require('readline-sync')

const respostaUsuario = rs.question('Digite "yes" ou "no": ')

axios.get(dadoAleatorio)
.then((resposta) => {
    const dadosResposta = resposta.data.answer
    
    if(dadosResposta == respostaUsuario) {
        console.log('Acertou!')
    } else {
        console.log('Errou!')
    }
})

.catch((error) => {
    console.log(error)
})