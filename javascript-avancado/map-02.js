// Crie um array com os valores da variável 'tecnologias'. Substitua a palavra 'JavaScript' por 'JS':

const tecnologias = ["React JavaScript", "Vue.JavaScript"]; //vetor original
   
const tecnologiasCorrigidas = tecnologias.map (function(tecnologia){
   return tecnologia.replace('JavaScript', 'JS'); //vetor modificado, Substituído JavaScript por JS 
});
   
console.log(tecnologiasCorrigidas);