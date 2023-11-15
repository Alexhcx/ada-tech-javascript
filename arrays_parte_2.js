// > ARRAYS - PARTE 2 - METODOS DE ARRAYS
let arr1 = [1, 32, 41, 49, 59];
let arr2 = [];

// Fatiamento: slice
console.log(arr1.slice(1, 3)); // > [ 32, 41 ]
console.log(arr1.slice(2)); // > [ 41, 49, 59 ] 
console.log(arr1.slice(-1)); // > [ 59 ]

// Adicionar elementos no final do array: push
console.log('Antes de adicionar elementos:', arr2);
arr2.push(100);
console.log(arr2);
arr2.push(200);
console.log(arr2);
arr2.push(300, 400, 500);
console.log('push. Depois de adicionar elementos', arr2);

// Adicionar elementos no inicio do array: unshift
console.log('Antes de adicionar elementos:', arr2); 
arr2.unshift(10, 20, 30);
console.log('unshift. Depois de adicionar elementos', arr2);

// Remover elementos do final do array: pop
console.log('Antes de remover elementos:', arr2);
arr2.pop();
console.log('pop. Depois de remover elementos', arr2); 

// Remover elementos do inicio do array: shift
console.log('Antes de remover elementos:', arr2);
arr2.shift();
console.log('shift. Depois de remover elementos', arr2);

// Concatenar arrays: concat
console.log(arr1)
console.log(arr2)

let arr3 = arr1.concat(arr2);
console.log('Concatenando arrays', arr3);

// buscar elementos: indexOf | lastIndexOf
console.log(arr3)
let indiceDoElemento = arr3.indexOf(41);
console.log('indiceDoElemento:', indiceDoElemento);

let ultimoIndiceDoElemento = arr3.lastIndexOf(300);
console.log('ultimoIndiceDoElemento:', ultimoIndiceDoElemento);
//index of e last index of retornam -1 se o elemento não for encontrado
// se o elemento for encontrado, retorna o indice do elemento

// Verificar se o elemento existe no array: includes
console.log(arr3.includes(41)); // > true
console.log(arr3.includes(1000)); // > false

// Ordenar elementos do array: sort
console.log(arr3);
arr3.sort();
console.log('Ordenando elementos do array:', arr3);

// Inverter a ordem dos elementos do array: reverse
console.log(arr3);
arr3.reverse();
console.log('Invertendo a ordem dos elementos do array:', arr3);
