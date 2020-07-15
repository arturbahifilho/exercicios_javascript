//trocar a letra 'e' por '*' e criar um novo array com os nomes

const nomes = ["Pedro", "Tiago", "Anderson", "Jorel"];
  
function substituirLetra(nome) {
    return (nome.replace('e', '*')); }
  
const novosNomes = nomes.map(substituirLetra);
console.log(novosNomes);