// Em JavaScript temos 6 tipos primitivos de dados;

// String
let carro = 'Porshce';

// Boolean (true or false)
carro = true;

// Number
carro = 1;

// Undefined, que é um dado que nao tem um valor específico
let WTF;

// Null, que é um valor vazio intensional
carro = null;

// Símbolos (ES6+). Um símbolo pode ser usado como o identificador para propriedades 
// de objetos; esse é o único propósito do tipo de dado.
carro = Symbol('Ola');

// No JavaScript, as varíaveis são dinamicamente tipadas, o que significa que pdoemos associá-las
// a tipos diferentes de dados, como por exemplo:

let quantidade = 4;
console.log(quantidade);

quantidade = 'quatro';
console.log(quantidade)
// Eu fiz a operação acima, associei a variavel quantidade primeiramente ao numero 4, e em seguida, a
// associei à palavra 'quatro', e mesmo assim, nenhum erro foi retornado.