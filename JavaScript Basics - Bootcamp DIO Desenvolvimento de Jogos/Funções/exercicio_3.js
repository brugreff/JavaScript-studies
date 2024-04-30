// Invocando função dentro de outra função //

function escrevaMeuNome(nome) {
  return "Meu nome é " + nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome("Bruna") + ", maior de idade");
  } else {
    console.log("Menor de idade");
  }
}

verificarIdade(24);
