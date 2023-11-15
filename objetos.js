// Objetos

// Criando um objeto em javascript
let arr = ['Alexandre', 26, 1.81, true];

let pessoa =  {
    nome: 'Alexandre',
    idade: 26,
    altura: 1.81,
    adulto: true
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['pessoa']);
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.adulto);

// como adicionar um par chave-valor de um objeto
pessoa.profissao = 'Desenvolvedor';

console.log(pessoa);

// como remover um par chave-valor de um objeto
delete pessoa.adulto; 

console.log(pessoa);

// como percorrer um objeto
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}