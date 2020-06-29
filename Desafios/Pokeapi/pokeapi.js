let axios = require('axios')
const rs = require('readline-sync')
var fs = require('fs')

var filtro = rs.question('Digite o nome ou numero de um pokemon: ').toLocaleLowerCase()

axios.get(`https://pokeapi.co/api/v2/pokemon/${filtro}`)
// function trataRespostaApi(resp) {
    .then((resp) => {
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

        // axios.get(`https://pokeapi.co/api/v2/ability/${infoPokemon.habilidade}`)
        // var pokemonsSalvos = fs.readFileSync('Desafios/Pokeapi/pokemons.json')
        // var pokemons = JSON.parse(pokemonsSalvos)
    
        // var pokemonSerializado = JSON.stringify(pokemons)
        // fs.writeFileSync('Desafios/Pokedex/pokemons.json', pokemonSerializado)
        // var infoHabilidade = {efeito: []}
        // var habilidade = []
        // dados.forms.forEach((element) => {
        // infoHabilidade.efeito.push(element.name)
        // habilidade.push(infoHabilidade)
        // console.log(habilidade)
        // })

    pokemons.push(infoPokemon)
    console.log(pokemons)

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
    

    }).catch((error) => {
        console.log(error)
    }) 

    var pokemonsSalvos = fs.readFileSync('Desafios/Pokeapi/pokemons.json')
    var pokemons = JSON.parse(pokemonsSalvos)
    // var pokemonSerializado = JSON.stringify(pokemons)
    // fs.writeFileSync('Desafios/Pokedex/pokemons.json', pokemonSerializado)
    pokemons.forEach((pokemon) => {
    pokemon.habilidade.forEach((habilidade) => {
        axios.get(`https://pokeapi.co/api/v2/ability/${habilidade}`)
        .then((resposta) => {
            let dadosHab = resposta.data
            var infoHabilidade = {efeito: []}
                var habilidade = []
                for(var i = 1; i < pokemon.habilidade.length; i++){
                    infoHabilidade.efeito = dadosHab.effect_entries[i]
                    habilidade.push(infoHabilidade)
                    console.log(habilidade)
                }
            //     dadosHab.effect_entries.forEach((element) => {
            //     infoHabilidade.efeito.push(element.effect)
            //     habilidade.push(infoHabilidade)
            //     console.log(habilidade)
        
            // })
        }).catch((error) => {
            console.log(error)
        })
        })
})


    
// } //fechamento função


// .then(trataRespostaApi)


// .then((resposta) => {
//         let dataHab = resposta.data
//         var pokemonsSalvos = fs.readFileSync('Desafios/Pokeapi/pokemons.json')
//         var pokemons = JSON.parse(pokemonsSalvos)    
//         var pokemonSerializado = JSON.stringify(pokemons)
//         fs.writeFileSync('Desafios/Pokeapi/pokemons.json', pokemonSerializado)
       
//         pokemons.forEach((pokemon) => {
//             pokemon.habilidade.forEach((habilidade) => {
//                 axios.get(`https://pokeapi.co/api/v2/ability/${habilidade}`)
//                 var infoHabilidade = {descricao: ''}
                
//                 infoHabilidade.descricao = dataHab.effect_entries[i]
//                 pokemons.push(infoHabilidade)
//                 })
//         })
        
// }).catch((error) => {
//     console.log(error)
// })