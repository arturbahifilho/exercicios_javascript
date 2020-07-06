//usando for in, calcular o número total de funcionários nas lojas

const lojas = [
    { filial: 'Rio de Janeiro', totalFuncionarios: 10 },
    { filial: 'São Paulo', totalFuncionarios: 20 },
    { filial: 'Amazonas', totalFuncionarios: 5 },
    { filial: 'Pernanbumco', totalFuncionarios: 15 },
  ];
   
  let funcionariosLojas = 0;
   
  for (const i in lojas) {
    
  funcionariosLojas+= lojas[i].totalFuncionarios;
  }
   
  console.log(funcionariosLojas);