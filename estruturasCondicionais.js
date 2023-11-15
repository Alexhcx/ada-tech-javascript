// > ESTRUTURAS CONDICIONAIS

const idade = 20;

if (idade >= 18) {
  console.log('Pode entrar na festa!');
} else {      
  console.log('Não pode entrar na festa!');
}

// Se media >= 7, aprovado
// Se media >= 5 e < 7, recuperacao
// Se media < 5, reprovado

let media = 10;

if (media >= 7) {
  console.log('Aprovado(a)');
} else if (media >= 5) {
  console.log('Recuperação');
} else {
  console.log('Reprovado(a)');
}