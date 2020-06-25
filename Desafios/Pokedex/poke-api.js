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
const { info } = require('console')

var filtro = rs.question('Digite o nome ou numero de um pokemon: ').toLocaleLowerCase()

//console.log(pesquisa)

axios.get(`${url}/pokemon/${filtro}`)
    .then((resposta) => {

        const pokemon = resposta.data
        var infoPokemon = { nome: '', tipo: [], habilidades: [] }
        var pokemons = []
      
        infoPokemon.nome = pokemon.name


        pokemon.types.forEach((element) => { //forEach => usado em array
            infoPokemon.tipo.push(element.type.name)
        })

        pokemon.abilities.forEach((element) => {
            infoPokemon.habilidades.push(element.ability.name)

        })
        console.log(infoPokemon)
        pokemons.push(infoPokemon)

        var pergunta = rs.question('Voce deseja salvar o pokemon? Sim / Nao: ')
        if(pergunta == 'Sim' || pergunta == 'sim' || pergunta == 's'){
            pokemonSerializado = JSON.stringify(pokemons)
            fs.writeFileSync('pokemons.json', pokemonSerializado)
            console.log('Pokemon salvo!')
        } else if(pergunta == 'Nao' || pergunta == 'nao' || pergunta == 'n') {
            console.log('Tudo bem!')
        } else {
            console.log('Digite apenas Sim ou Nao')
        }

    }).catch((error) => {
        console.log(error)
    })

   

