// Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
// caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para
// que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez de
// serializar/deserializar o objeto será o array que possui os carros).
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou
// adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.

// var rs=require('readline-sync')
// var fs=require('fs')
// var jsons=fs.readFileSync('carro.json')
// var carro=JSON.parse(jsons)
// var opcao=rs.question('Aperte A para adicionar, E para somente exibir e S para sair: ')

// while(opcao != 'S'){
// if(opcao == 'A'){
// var i = carro.modelo.length
// carro.cor[i]=rs.question('Digite a cor: ')
// carro.modelo[i]=rs.question('Digite o modelo: ')
// carro.marca[i]=rs.question('Digite a marca: ')
// console.log(carro)

// var carroSerializado= JSON.stringify(carro)

// fs.writeFileSync('carro.json', carroSerializado)

// }else if(opcao == 'E'){
//     console.log(carro)
//     var carroSerializado= JSON.stringify(carro)
    
//     fs.writeFileSync('carro.json', carroSerializado)
// }else{
//     console.log('Digite uma opção válida')
// }
// opcao=rs.question('Aperte A para adicionar, E para somente exibir e S para sair: ')
// }