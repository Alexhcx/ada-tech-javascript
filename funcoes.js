// funções
//Definição de função
function saudacao(nome, curso = 'Javascript'){
    console.log(`Olá, seja bem vindo(a), ${nome}! Você está matriculado(a) no curso ${curso}`);
}

saudacao('Alexandre');

//Retorno de função
function soma(x, y){
    return x + y;
}

console.log(soma(10, 20)/2);

function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    } 
    
        return false;
}

console.log(maiorDeIdade(17));

//Arrow function
const soma2 = (x, y) => {
    return x + y;
}

console.log(soma2(10, 20));

//Arrow function com retorno implícito
const soma3 = (x, y) => x + y;

console.log(soma3(10, 20));

//Arrow function com um parâmetro
const quadrado = x => x * x;

console.log(quadrado(10));

//Arrow function sem parâmetros
const hello = () => 'Hello World!';

console.log(hello());

//A arrow function não tem o seu próprio this, ela utiliza o this do contexto onde ela foi definida, ou seja, o this de uma arrow function é léxico.

//Funções anônimas
//Funções anônimas são funções sem nome, que são atribuídas a uma variável ou passadas como parâmetro para outra função.

//Função anônima atribuída a uma variável
const soma4 = function(x, y){
    return x + y;
}

console.log(soma4(10, 20));
