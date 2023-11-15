// > Laços condicionais

const input = require('readline-sync');

const numero_sorteado = 5;

let numero = Number(input.questionInt('Qual numero voce escolhe? ')); 

// if (numero === numero_sorteado) {
//     console.log('Parabens, voce acertou!');
// } else {
//     console.log('Que pena, voce errou!');
// }

// > WHILE
while (numero !== numero_sorteado) {
    console.log('Que pena, voce errou!');
    numero = Number(input.questionInt('Qual numero voce escolhe? ')); 
}

console.log('Parabens, voce acertou!');