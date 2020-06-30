//somar o valor de todos os notebooks

let produtos = [
    {nome: "Notebook", valor: 2500},
    {nome: "Monitor", valor: 900},
    {nome: "Mouse e teclado", valor: 100},
  ];
   
  let valorTotal = 0;
   
  for (let i = 0; i < produtos.length; i++) {
    valorTotal += produtos[i].valor;
  }
   
  console.log(valorTotal);