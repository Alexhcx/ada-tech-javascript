// >> LAÇO NUMERICO: FOR

const input = require('readline-sync');
// O problema
// const nota1 = Number(input.question('Digite a primeira nota: '));
// const nota2 = Number(input.question('Digite a segunda nota: '));
// const nota3 = Number(input.question('Digite a terceira nota: '));

// let media = (nota1 + nota2 + nota3) / 3;

// acumulador
let acumulador = 0;
acumulador = acumulador + 10;
acumulador = acumulador + 2;
acumulador += 2;
acumulador -= 1;
acumulador++;

console.log(acumulador); // > 14

acumulador = 0;

// estrutura for
for (let i = 0; i < 10; i++) {
  console.log('repetição', i);
}

for (let i = 5; i < 10; i++) {
  console.log('repetição', i);
}

for (let i = 10; i > 0; i--) {
  console.log('repetição', i);
}

// resolvendo o problema

for (let i = 0; i < 3; i++){
    const nota = Number(input.question(`Digite a ${i + 1} nota: `));
    acumulador += nota;
}

const media = acumulador / 3;
console.log(`A média é ${media}`);