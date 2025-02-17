/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realozar esta viagem.*/

const precoEtanol = 3.61;
const precoGasolina = 5.67;
const kmPorLitros = 10;
const distanciaEmKm = 12;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
