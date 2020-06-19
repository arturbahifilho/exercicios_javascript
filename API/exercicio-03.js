// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.

// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

const episodioAleatorio = 'https://www.breakingbadapi.com/api/episodes/'

const axios = require('axios')
const rs = require('readline-sync')

let numeroUsuario = rs.questionInt('Digite o numero de algum episodio: ')

axios.get(episodioAleatorio)

.then((resposta) => {
    const numeroEpisodio = resposta.data[numeroUsuario - 1]
    console.log('Temporada: ', numeroEpisodio.season)
    console.log('Elenco de personagens: ', numeroEpisodio.characters)
})

.catch((error) => {
    console.log(error)
})