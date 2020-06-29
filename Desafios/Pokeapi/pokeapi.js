let axios = require('axios')
const rs = require('readline-sync')
var fs = require('fs')

var filtro = rs.question('Digite o nome ou numero de um pokemon: ').toLocaleLowerCase()

axios.get(`https://pokeapi.co/api/v2/pokemon/${filtro}`)

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
           
        }).catch((error) => {
            console.log(error)
        })
        })
})

var pokemonsSalvos = fs.readFileSync('Desafios/Pokeapi/pokemons.json')
    var pokemons = JSON.parse(pokemonsSalvos)
    // var pokemonSerializado = JSON.stringify(pokemons)
    // fs.writeFileSync('Desafios/Pokedex/pokemons.json', pokemonSerializado)
    pokemons.forEach((pokemon) => {
    pokemon.tipo.forEach((tipo) => {
        axios.get(`https://pokeapi.co/api/v2/type/${tipo}`)
        .then((respo) => {
            let dadosTipo = respo.data
            var infoDano = {dobroDoDano: [], metadeDoDano: [], nenhumDano: [], mesmoTipo: []}
            var danosPokemon = []
            var danosPokemon2 = []
            var danosPokemon3 = []
            var tiposPokemon = []
                for(var i = 0; i < dadosTipo.damage_relations.double_damage_to.length; i++){
                    infoDano.dobroDoDano = dadosTipo.damage_relations.double_damage_to[i]
                    danosPokemon.push(infoDano.dobroDoDano)
                    
                }
                for(var j = 0; j < dadosTipo.damage_relations.half_damage_to.length; j++){
                    infoDano.metadeDoDano = dadosTipo.damage_relations.half_damage_to[j]
                    danosPokemon2.push(infoDano.metadeDoDano)
                    
                }
                for(var k = 0; k < dadosTipo.damage_relations.no_damage_to.length; k++){
                    infoDano.nenhumDano = dadosTipo.damage_relations.no_damage_to[k]
                    danosPokemon3.push(infoDano.nenhumDano)
                
                }
                for(var n =0; n < dadosTipo.pokemon.length; n++ ){
                    infoDano.mesmoTipo = dadosTipo.pokemon[n]
                    tiposPokemon.push(infoDano.mesmoTipo)
                }
               
                console.log('Dobro do dano: ', danosPokemon)
                console.log('Metade do dano: ', danosPokemon2)
                console.log('Nenhum dano: ', danosPokemon3)
                console.log('Pokemons mesmo tipo: ', tiposPokemon)

        }).catch((error) => {
            console.log(error)
        })
        })
})