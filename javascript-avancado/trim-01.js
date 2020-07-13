//Imprima o valor de cada elemento do array 'cores' removendo os espaços desnecessários. Utilize 'forEach':

const cores = ["   Verde ", "Amarelo      ", "     Azul", " Branco"];
  
function imprimir(item) {
    console.log(item.trim()); 
}
  
cores.forEach(imprimir);