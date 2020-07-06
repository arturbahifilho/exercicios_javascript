//imprimir os pedidos entregues e os pedidos pendentes

const pedidos = [
    { descricao: 'Batata frita', entregue: false },
    { descricao: 'Hamburguer triplo', entregue: true },
    { descricao: 'Hot dog', entregue: true },
    { descricao: 'Batata rústica', entregue: false },
  ];
   
  const pedidos_entregues = [];
  const pedidos_pendentes = [];
   
  let i = 0;
   
  while( i < pedidos.length) {
    if( pedidos[i].entregue == false ) {
        pedidos_pendentes.push(pedidos[i]);
    } 
  else{
      pedidos_entregues.push(pedidos[i]);
    }
   
    i++;
  }
  console.log('entregues: ', pedidos_entregues)
  console.log('pendentes: ', pedidos_pendentes)