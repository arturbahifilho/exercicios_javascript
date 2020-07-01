// imprimir os nomes dos candidatos que tenham pelo menos uma dessas habilidades: PHP, .NET ou React.

let candidatos = [
    { nome: 'Vitor', linguagem: 'PHP', framework: 'Laravel' },
    { nome: 'Daniel', linguagem: 'JavaScript', framework: 'React' },
    { nome: 'Ricardo', linguagem: 'Java', framework: 'Spring' },
  ];

  var i = 0
while(i < candidatos.length) {
    if(candidatos[i].linguagem == 'PHP'){
        console.log(candidatos[i].nome)
    } else if (candidatos[i].framework == 'React' || candidatos[i].framework == '.Net' ) {
        console.log(candidatos[i].nome);
       
}
i++
}
   
//   while (const candidatos) {
//     for(var i = 0; i < candidatos.length; i++){
//         if(candidatos[i].linguagem == 'PHP'){
//             console.log(candidatos[i].nome)
//         } else if (candidatos[i].framework == 'React' || candidatos[i].framework == '.Net' ) {
//             console.log(candidatos[i].nome);
//     }
// }
    
//   }
