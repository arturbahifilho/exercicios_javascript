//imprimir o tamanho de cada nome inserido no array

const nomes = [
    "Ana",
    "Fernando",
    "Bruna"
  ];
    
  function imprimirTotalCaracteres(nome) {
      console.log(nome.length); 
  }
    
  nomes.forEach(imprimirTotalCaracteres);