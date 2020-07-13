//código para percorrer o array 'cores' (utilize um método para isso)
//verificar se cada elemento possui o caractere 'a' (utilize outro método para isso):

// - 'posicao' recebe um 'number' referente a posição (index) do caractere encontrado;
// - Se não encontrar, 'posicao' recebe -1;
// - Execute a função 'imprimir' para cada elemento de 'cores'.

const cores = ["Verde", "Amarelo", "Azul", "Branco"];
  
function imprimir(item) {
    const posicao = item.indexOf("A"); 
 
    const mensagem = ( posicao > -1 ) 
      ? "Encontrou a letra"
      : "Não encontrou";
 
    console.log( mensagem ); 
}
  
cores.forEach(imprimir);
