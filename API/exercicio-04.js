// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020



const axios = require('axios')
let rs = require('readline-sync')

let cepUsuario = rs.questionInt('Digite um numero de CEP (00000000): ')

axios.get('https://api.postmon.com.br/v1/cep/' + cepUsuario)

.then((resposta) => {
    const numeroCep = resposta.data
        console.log(numeroCep.cidade)
        console.log(numeroCep.logradouro)
        console.log(numeroCep.estado)
  
})
    

.catch((error) => {
    console.log(error)
})