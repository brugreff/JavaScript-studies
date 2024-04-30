/*Boolean*/

const mariaCabeloLongo = true;
const joaoCabeloLongo = false;

/*EXEMPLO COM RESTO DE DIVISÃO 
->Saber se o número é par - divisão por 2 terá resto 0

const numero = 0;

const numeroPar = numero % 2 === 0;*/

/*console.log(numeroPar); - retorna true ou false*/

/*TIPO DE OPERADORES DE IGUALDADE:

== -> Ignora o tipo da variável
exemplo: const numeroPar = (numero % 2) == '0'; (0 é uma string, funciona igual)

ESTRUTURA CONDICIONAL COM IF E ELSE:*/

const numero = 0;
const numeroDivisivelPor5 = numero % 5 === 0;

/* if (numeroPar) {
  se o nº for par: executa
  console.log("Executei");
}
Indicador NÃO: !
if (!numeroPar) {
  console.log("Ímpar");
}*/

/*if (numeroDivisivelPor5) {
  console.log("Sim");
} else {
  console.log("Não");
}*/

/*ELSE IF - Se for falso, irá continuar (pode incluir quantos else if forem neecssários
Else precisa ser o último*/

if (numero === 0) {
  console.log("O número é inválido");
} else if (numeroDivisivelPor5) {
  console.log("Sim");
} else {
  console.log("Não");
}
