// Tarefa fácil:
// - Pedir ao usuário que defina um pokémon que ele gostaria de saber mais informações
// sobre. Essa escolha pode ser feita através do input do ID do Pokémon ou pelo nome.
// - Fazer o display do nome do Pokémon, seu tipo e também sua lista de habilidades (na
// tela do terminal)
// - Se o usuário quiser salvar esse pokémon em sua pokedex local para consultar mais
// tarde, ele pode fazê-lo. Aqui, os dados devem ficar armazenados na máquina, em um arquivo
// .json. Você escolherá a estrutura mais adequada.

var url = 'https://pokeapi.co/api/v2'

const axios = require('axios')
const rs = require('readline-sync')
var fs = require('fs')

var filtro = rs.question('Digite o nome ou numero de um pokemon: ')

//console.log(pesquisa)

axios.get(`${url}/pokemon/${filtro}`)
    .then((resposta) => {
        const pokemon = resposta.data
        console.log('Nome: ', pokemon.name)

        var nomeDosTipos = []
        pokemon.types.forEach((tipo) => { //forEach => usado em array
            nomeDosTipos.push(tipo.type.name)
        })
        console.log('Tipo: ', nomeDosTipos)

        var nomeDasHabilidades = []

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
            
        })
        console.log('Habilidade: ', nomeDasHabilidades)

    }).catch((error) => {
        console.log(error)
    })

    pokemonSerializado = JSON.stringify(filtro)
    fs.writeFileSync('filtro.json', pokemonSerializado)