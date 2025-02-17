/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Fórmula do IMC:
IMC = peso / (altura *altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo. 

IMC em adultos, condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 26 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade grave;
*/

// Valores de entrada //
const pesoEmKg = 72;
const alturaEmCm = 1.54;

// Saída //
const imc = pesoEmKg / Math.pow(alturaEmCm, 2);
console.log(imc.toFixed(2));

// Condições //
if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}
