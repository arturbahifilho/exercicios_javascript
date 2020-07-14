//Crie um código para imprimir se o aluno foi ou não aprovado:

const alunosNotas = [7, 8, 4];
const mensagemPadrao = "Aluno aprovado";
 
const total = alunosNotas.reduce(function(total, nota){
  return total + nota;
}, 0);
 
if ( total / 3 >= 7 ) {
  console.log(mensagemPadrao);
} else {
  console.log(mensagemPadrao.replace("aprovado", "reprovado"));
}