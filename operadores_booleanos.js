// > OPERADORES BOOLEANOS

// Igualdade: == (comparação de valor) === (comparação de valor e tipo)
// Desigualdade: != (comparação de valor) !== (comparação de valor e tipo)
// Maior que: >
// Maior ou igual: >=
// Menor que: <
// Menor ou igual: <=

console.clear();

const numero = 10;

console.log(numero == 10); //true
console.log(numero > 20); //false
console.log(numero < 20); //true
console.log(numero >= 10); //true
console.log(numero <= 10); //true
console.log(numero != 10); //false
console.log(numero != 20); //true
console.log(numero !== 10); //false
console.log(numero !== 20); //true

// - Comparação de valor e tipo
console.log(numero == "10"); //true
console.log(numero === "10"); //false
console.log(numero != "10"); //false
console.log(numero !== "10"); //true

// - Conjunções Lógicas
// AND => &&
let idade = 10
let idade2 = 20
let tenhoCNH = true
let tenhoCNH2 = false

const possoDirigir = idade >= 18 && tenhoCNH === true;
const possoDirigir2 = idade2 >= 18 && tenhoCNH2 === true;
console.log('Posso dirigir', possoDirigir);
console.log('Posso dirigir2', possoDirigir2);

// OR => ||
idade = 40

const votoFacultativo = idade >= 16 && idade < 18 || idade > 70;

// NOT => !
const estouGostandoDoCurso = false;

console.log('Não estou gostando do curso', !estouGostandoDoCurso);