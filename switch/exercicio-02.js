//função que verifica se a senha é fraca ou válida de acordo com o tamanho da senha
function validaSenha(senha) {
    const caracteres = senha.length;
    const msg = caracteres < 9 ? "Senha fraca" : "Senha válida";
  
    console.log(msg);
  }
   
  const novaSenha = "123";
  validaSenha(novaSenha);