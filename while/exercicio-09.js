//usando o 'do', alertar o motorista enquanto ele tiver com valocidade abaixo de 50km/h
let velocidade = 0;
 
do
 {
  console.log('Você precisa acelerar, sua velocidade é de: ' + velocidade + 'km/h');
 
velocidade++;
} 
while( velocidade< 50 )