//uso do if ternário

const nome = "José";
const tipoUsuario = nome == "José" ?'ADM' : "Comum";
 
if( tipoUsuario == 'ADM' ) {
  console.log( "Acesso liberado" );
} 
else{
  console.log( "Acesso bloqueado" );
}