// código para imprimir a média de idade dos alunos:

// - A variável 'total' recebe a soma das idades dos alunos;
// - Divida a variável 'total' pela quantidade de alunos;
// - Imprima a média de idade.

const alunos = [
  { nome: "José", idade: 25},
  { nome: "Tiago", idade: 28},
  { nome: "Helena", idade: 30},
  { nome: "Ana", idade: 20},
];
 
const total = alunos.reduce( (total, aluno) => total + aluno.idade, 0 );
const mediaIdade = total / alunos.length
;
 
console.log(mediaIdade);