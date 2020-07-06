//usando o 'do', alertar quando o ambiente estiver resfriado (temperatura menor ou igual a 18)

let temperatura = 36;
 
do 
{
  console.log("Temperatura: " +  temperatura + ". Esfriando...");
 
  
temperatura--;
} 
while ( temperatura>= 18)
 
console.log("Ambiente resfriado");