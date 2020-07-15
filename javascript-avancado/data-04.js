// Imprima a data atual com algumas alterações:

// - Acrescente 10 anos a ela;
// - Acrescente 2 meses a ela.

const hoje = new Date();
  
hoje.setFullYear(hoje.getFullYear()+ 10);
hoje.setMonth(hoje.getMonth() + 2);
 
console.log(hoje);