// > ARRAYS
// - Como criar um array?

let arr = ['Alexandre', 26, 1.77, true];

console.log(arr); // > [ 'Alexandre', 26, 1.77, true ]

// - Como acessar um elemento do array?

console.log('primeiro elemento:', arr[0]); // > 'Alexandre'
console.log('segundo elemento:', arr[1]); // > 26
console.log('terceiro elemento:', arr[2]); // > 1.77
console.log('quarto elemento:', arr[3]); // > true

// - Como obter o tamanho do array?

console.log('tamanho do array:', arr.length); // > 4

// - Percorrendo um array

for(let i = 0; i < arr.length; i++) {
    console.log(`Elemento ${i}:`, arr[i]);
}

// > for...of
for( let elemento of arr) {
    console.log(elemento);
}

// > for ...in

for(let indice in arr) {
    console.log(`Elemento ${indice}:`, arr[indice]);
}