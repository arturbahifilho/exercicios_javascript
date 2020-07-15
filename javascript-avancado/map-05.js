// Imprima apenas os primeiros nomes dos clientes:

const clientes = ["José Silva", "Tiago Ribeiro", "Helena Souza", "Ana Cruz"];
 
function primeiroNome(nome) {
  const nomeSeparado = nome.split(" ");
  return nomeSeparado[0];
}
 
const nomesClientes = clientes.map(primeiroNome);
 
console.log(nomesClientes);