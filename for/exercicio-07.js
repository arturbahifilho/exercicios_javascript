//imprimir nomes dos jogos que os usuários podem ver de acordo com a sua idade.

let jogos = [
    {nome: 'Call of Duty', classificacao: 18},
    {nome: 'Resident Evil 6', classificacao: 16},
    {nome: 'Super Bomberman R', classificacao: 7},
    {nome: 'Bomberman', classificacao: 7},
  ]
   
  let idade = 15;
   
  for(let i = 0; i < jogos.length; i++) {
    if ( idade >= jogos[i].classificacao) {
      console.log(jogos[i].nome);  
    }
  }