

const candidatos = [
    { nome: "Fernando", tecnologia: "PHP"},
    { nome: "Diego", tecnologia: "Python"},
    { nome: "Eduardo", tecnologia: "C#"},
    { nome: "Vitor", tecnologia: "C++"},
    { nome: "Mateus", tecnologia: "JavaScript"},
  ];
   
  const selecionados = candidatos.filter( candidato =>  candidato.tecnologia === 'C#' ||  candidato.tecnologia === 'C++');
    
  console.log(selecionados);