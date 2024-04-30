// Exemplo prático com Funções - Praticando/exercicio_2.js (modificado) //

// Funções auxiliares //
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}

// Função principal - main //

(function () {
  const peso = 72;
  altura = 1.54;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})(); // Função imediatamente invocada, não precisa chamar o main depois - pode até tirar o nome da função

// No js, funções são valores - objeto do tipo função //
