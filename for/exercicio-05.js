let distancia = 20;
let quantidadeTanque = 50;
let LitrosPorKm = 2;
 
for (let i = 0;i < distancia;i++) {
  quantidadeTanque -= LitrosPorKm;
}
 
console.log(quantidadeTanque);