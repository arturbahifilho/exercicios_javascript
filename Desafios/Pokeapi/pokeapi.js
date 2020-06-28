

    let axios = require('axios')
const rs = require('readline-sync')
var fs = require('fs')

var filtro = rs.question('Digite o nome ou numero de um pokemon: ').toLocaleLowerCase()

function trataRespostaApi(resp) {
    let dados = resp.data
    var infoPokemon = {nome: '', id: '',tipo: [], habilidade: []}
    var pokemons = []
    infoPokemon.nome = dados.name
    infoPokemon.id = dados.id
   dados.types.forEach((element) => { //forEach => usado em array
        infoPokemon.tipo.push(element.type.name)
   })

    dados.abilities.forEach((element) => {
            infoPokemon.habilidade.push(element.ability.name)
        })

        // var pokemonsSalvos = fs.readFileSync('Desafios/Pokedex/pokemons.json')
        // var pokemons = JSON.parse(pokemonsSalvos)
    
        // var pokemonSerializado = JSON.stringify(pokemons)
        // fs.writeFileSync('Desafios/Pokedex/pokemons.json', pokemonSerializado)
        // pokemons.habilidade.forEach((habilidade) => {
        //     axios.get(`https://pokeapi.co/api/v2/ability${habilidade}`)
        //         .then((resposta) => {
        //             let dadosHabilidade = resposta.data
        //             var infoHabilidade = {descricao: ''}
        //             infoHabilidade.descricao = dadosHabilidade.effect_entries[1]
        //             pokemons.push(infoHabilidade)
        //             // console.log(infoHabilidade)
        //         }).catch((error) => {
        //             console.log(error)
        //         })
        //     })
   
    pokemons.push(infoPokemon)
    console.log(infoPokemon)

    var pergunta = rs.question('Voce deseja salvar o pokemon? Sim / Nao: ')
        if(pergunta == 'Sim' || pergunta == 'sim' || pergunta == 's'){
            var pokemonsSalvos = fs.readFileSync('Desafios/Pokeapi/pokemons.json')
            pokemons = JSON.parse(pokemonsSalvos)
            pokemons.push(infoPokemon)
            var pokemonSerializado = JSON.stringify(pokemons)
            fs.writeFileSync('Desafios/Pokeapi/pokemons.json', pokemonSerializado)
            console.log('Pokemon salvo!')
        } else if(pergunta == 'Nao' || pergunta == 'nao' || pergunta == 'n') {
            console.log('Tudo bem!')
        } else {
            console.log('Digite apenas Sim ou Nao')
        }
} //fechamento function trataRespostaApi

// function detalhesHabilidade(resp) {
    
    
//     pokemons.habilidade.forEach((habilidade) => {
//         axios.get(`https://pokeapi.co/api/v2/ability/${habilidade}`)
//         var infoHabilidade = {descricao: ''}
//         infoHabilidade.descricao = dados.effect_entries[1]
//         pokemons.push(infoHabilidade)
//     })
        // } //fechamento função detalhesHabilidade


axios.get(`https://pokeapi.co/api/v2/pokemon/${filtro}`)
.then(trataRespostaApi)
.catch((error) => {
    console.log(error)
}) 

// var dadosParaHabilidade = []

       

   

   

