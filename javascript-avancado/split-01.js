// Imprima a quantidade de caracteres do segundo nome da variável 'nomeCompleto':
// - Divida a string 'nomeComplete' em um array;
// - Separe por espaço " ";
// - Imprima a quantidade de caracteres do segundo nome.

const nomeCompleto = "Joaquim Silva de Castro";
 
const nomeSeparado = nomeCompleto.split(' ');
 
console.log(nomeSeparado[1].length);