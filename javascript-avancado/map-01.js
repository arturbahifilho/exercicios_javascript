//imprimir uma lista com apenas os salários dos funcionários:

const listaFuncionarios = [
    { id: 1, nome: 'Joaquim', salario: 1800 },
    { id: 2, nome: 'Ana', salario: 1200 },
    { id: 3, nome: 'Wallace', salario: 1400 },
    { id: 4, nome: 'Thiago', salario: 2000 },
  ];
   
  const listaAtualizada = listaFuncionarios.map ( function (funcionario) {
     return funcionario.salario;
  });
      
  console.log(listaAtualizada);