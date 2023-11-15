// > COERÇÃO (CONVERSÃO) DE TIPOS
// > É a conversão automática de um tipo de dado para outro tipo

// > COERÇÃO EXPLÍCITA
// > É quando forçamos a conversão de tipos
const numero = 10;
console.log(numero + 10); // > 20

console.log(String(numero) + 10); // > "1010"
console.log(numero + Number("10")); // > 20

console.log(numero, typeof numero) // > 10 "number"
const numeroEmFormaDeString = String(numero); // > "10"

console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString) // > "10" "string"

console.log(Number('123456543')) // > 123456543
console.log(parseFloat('123456543')) // > 123456543
console.log(parseInt('123456543.12324')) // > 123456543
console.log(String(123456543)) // > '123456543'

console.log(Boolean(0)) // > false
console.log(Boolean('')) // > false
console.log(Boolean(null)) // > false
console.log(Boolean(undefined)) // > false
console.log(Boolean(NaN)) // > false
console.log(Boolean(1234123)) // > true      


// > COERÇÃO IMPLÍCITA
// > É quando o JS faz a conversão de tipos sem a nossa interferência

console.log('10' + 1); // > "101" 
console.log('10' - 1); // > 9
console.log('10' * 2); // > 20
console.log('10' / 2); // > 5
console.log('10' % 2); // > 0
console.log('10' ** 2); // > 100

console.log(10 - "Alexandre"); // > NaN

// Qual será a saida desse codigo?
let n = 1 + "1" // > "11"

n = n - 1 // > 10

console.log(n) // > 10

// Qual será a saida desse codigo?
console.log(2 + 3 + 4 + "5") // > "95"

// Qual será a saida desse codigo?
console.log("5" + 2 + 3 + 4) // > "5234"

// Qual será a saida desse codigo?
console.log("10" - "4" - "3" - 2 + "5") // > "15"