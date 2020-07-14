// Crie um código para imprimir a quantidade de frameworks JavaScript.

// - Crie um novo array contendo apenas os elementos de 'frameworks' onde o atributo 'linguagem' seja igual a "JavaScript";
// - Imprima a quantidade de elementos do array "JavaScript".

const frameworks = [
  {nome: 'React Native', linguagem: "JavaScript"},
  {nome: 'Laravel', linguagem: "PHP"},
  {nome: 'Entity', linguagem: "C#"},
  {nome: 'Vue', linguagem: "JavaScript"},
]
 
const JavaScript = frameworks.filter( framework => framework.linguagem === "JavaScript" );
 
console.log(JavaScript.length);