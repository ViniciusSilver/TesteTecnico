/* 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

function verfibo(d){
    let result = 0
    let a = 0
    let b = 1
  for (let i = 0; i<d;i++){
      result = a + b 
      a = b 
      b = result
      if (result === d){
      return   `${result} faz parte da sequência de Fibonacci`
      }
      else if (result > d){
           return `${d} não faz parte da sequência de Fibonacci`
      }
      }
     

}
console.log (verfibo(34))

/* 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre. */

function verificarLetraA(str) {
  const strLower = str.toLowerCase();
  const existeLetraA = strLower.includes('a');
  const quantidadeA = strLower.split('a').length - 1;
  if (existeLetraA) {
    console.log(`A letra 'a' aparece ${quantidadeA} vez(es) na string.`);
  } else {
    console.log("A letra 'a' não foi encontrada na string.");
  }
}
verificarLetraA("Banana");

/* 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */


function verSoma(){
  let soma = 0
 
  for (let k = 1; k<12; k++){
    soma = soma + k

  }
  return soma 
}
console.log(verSoma())

// O valor da variavel soma = 66 

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// soma o numero atual com 2. Ex: 1 + 2 = 3, 3 + 2 = 5, 5 + 2 = 7, 7 + 2 = 9. 
// b) 2, 4, 8, 16, 32, 64, ____
// multiplica o numero atual com 2. Ex = 2 x 2 = 4, 4 x 2 = 8/ 8 x 2 = 16, 32 x 2 = 64/ 64 x 2 = 128. 
// c) 0, 1, 4, 9, 16, 25, 36, ____
//  Soma a diferença de algarismos entre um e outro. Ex = 0 1 = 1 algarismo de diferença 0 + 1 = 1, 1 2 3 4 = 3 diferenças de algarismos 1 + 3 = 4 (...) 36 + 11 = 47
// d) 4, 16, 36, 64, ____
// 4 multiplicado pela soma dos numeros impares em ordem crescente = 4 x 1 = 4, 1 + 3 = 4/ 4 x 4 = 16, 3 + 5 = 9/ 4 x 9 = 36/ 9 + 7 = 16, 4 x 16 = 64/ 16 + 9 = 25, 4 x 25 = 100.
// e) 1, 1, 2, 3, 5, 8, ____
  // some o proprio valor com o valor anterior. Ex = 0 + 1 = 1 / 1 + 2 = 2 / 2 + 1 = 3 / 3 + 2 = 5 / 5 + 3 = 8 / 8 + 5 = 13.
// soma com o o mesmo + numero anterior ex = 1 + 1 = 2, 2 + 1 = 3, 3 + 2 = 5, 5 + 3 = 8, 8 + 5 = 13. 
// f) 2,10, 12, 16, 17, 18, 19, ____


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

// Ligue o primeiro interruptor (Interruptor A) e deixe-o ligado por alguns minutos.

// Isso vai fazer com que a lâmpada correspondente aqueça.
// Desligue o primeiro interruptor (A) e ligue o segundo interruptor (B) imediatamente antes de ir para a sala das lâmpadas pela primeira vez.

// Assim, uma lâmpada estará quente, uma estará acesa (porque acabou de ser ligada), e a outra estará apagada e fria.
// Vá até a sala das lâmpadas.

// A lâmpada que estiver acesa corresponde ao interruptor B (o segundo que você ligou).
// A lâmpada que estiver apagada, mas quente corresponde ao interruptor A (o primeiro que você ligou e depois desligou).
// A lâmpada que estiver apagada e fria corresponde ao interruptor C (o terceiro, que você nunca ligou).
