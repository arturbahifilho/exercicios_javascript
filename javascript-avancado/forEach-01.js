//imprimir o tamanho de cada nome

const nomes = [
    "Ana",
    "Fernando",
    "Bruna"
  ];
    
  function imprimirTotalCaracteres(nome) {
      console.log(nome.length); 
  }
    
  nomes.forEach(imprimirTotalCaracteres);