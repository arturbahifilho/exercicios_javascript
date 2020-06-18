// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const axios = require('axios')

const fraseAleatoria = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

axios.get(fraseAleatoria)

.then((resposta) => {
    const respostaDaFrase = resposta.data
    console.log(respostaDaFrase)
})

.catch((error) => {
    console.log(error)
})