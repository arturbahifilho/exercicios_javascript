//percorrer a array e imprimir apenas os nomes da filial

const lojas = [
    { nomeFilial : "Rio de Janeiro", faturamento : 20000},
    { nomeFilial : "Paraná", faturamento : 40000},
    { nomeFilial : "São Paulo", faturamento : 30000},
  ];
    
  const nomesLojas = lojas.map(function(loja, indice){

    return loja.nomeFilial
  ;
  });
   
  console.log(nomesLojas);