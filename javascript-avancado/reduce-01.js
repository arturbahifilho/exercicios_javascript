//imprimir total de produtos e o valor total dos produtos

const itensOrcamento = [
    { nomeProduto: "Celular", valor: 1200},
    { nomeProduto: "Notebook", valor: 3200},
    { nomeProduto: "Monitor", valor: 1000},
  ];
   
  const total = itensOrcamento.reduce( (total, produto) => total + produto.valor, 0);
   
  console.log("Total de produtos:" + itensOrcamento.length);
  console.log("Valor total dos produtos:" +  total );

