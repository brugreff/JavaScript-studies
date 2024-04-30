/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
  1 - Preço do combustível;
  2 - Gasto médio de combustível do carro por KM;
  3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

/*
RESOLUÇÃO
-
Entradas - constantes*/
const precoCombustivel = 5.64;
const KmPorLitro = 11;
const distanciaEmKm = 100;

/*Cálculo e Lógica do Programa*/
const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
/*toFixed: escolher quantidade de casas decimais. Neste caso, 2.*/
