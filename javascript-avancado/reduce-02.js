//Crie um código para somar os valores do array 'numeros' e armazenar na variável 'total'. Imprima o total:

const numeros = [1, 2, 3, 4, 5, 6];
const total = numeros.reduce ( (total, numero) => total + numero, 0);
console.log(total);