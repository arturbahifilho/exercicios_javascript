// Imprima a soma dos salários dos funcionários:

const listaFuncionarios = [
  { id: 1, nome: 'Joaquim', salario: 1800 },
  { id: 2, nome: 'Ana', salario: 1200 },
  { id: 3, nome: 'Wallace', salario: 1400 },
  { id: 4, nome: 'Thiago', salario: 2000 },
];
 
const salarios= listaFuncionarios.reduce( (total, funcionario) => total + funcionario.salario, 0);
    
console.log(salarios);