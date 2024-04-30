/* DECLARANDO FUNÇÃO:

function nome() { 

} */

// Exemplo - criando uma nova função teste //
function sayMyName(name) {
  console.log("Your name is: " + name);
}

// Uma vez declarada, pode ser referenciada //

sayMyName("Maria"); //Invocando a função, executar o bloco de código sem ecrevê-la toda novamente//
sayMyName("João");

// Exemplo - juros //

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

// Incrementar 10% em 100 //
console.log(incrementarJuros(100, 10));
// Incrementar 15% em 100 //
console.log(incrementarJuros(100, 15));

// ORGANIZANDO FUNÇÕES: //

function calcularJuros() {}

function main() {
  console.log("Programa principal");
  calcularJuros();
}

main();
