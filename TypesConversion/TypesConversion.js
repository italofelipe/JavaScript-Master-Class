let val;

// Conversão de Number para String

val = 5

console.log('\n', val);
console.log('\n', typeof val)
console.log('\n', val.length);

// Mas agora, veja só o que acontece quando eu adicioio o String

val = String(5);

console.log('\n',val);
console.log('\n', typeof val)
console.log( '\n',val.length);
// Sim, o meu numero 5 agora é uma string 5

// Conversão de Boolean para String

val = String(true);
console.log('\n',val);
console.log('\n', typeof val);
// Aqui, nao temos um boolean, e sim, uma string contendo
// true, o que são coisas bem diferentes.


// Conversão de Date para String

val = String(new Date())
console.log('\n', val);
console.log('\n', typeof val);
// Aqui, Date nao é mais um objeto como costuma ser, mas sim,
// uma string que recebe o objeto Date (ainda assim, Date nesse
// caso nao é objeto).

// Array para String

val = String([1, 2, 3, 4]);
console.log('\n', val);
console.log('\n', typeof val);


// Métodos toString

// Com numeros:
val = (5).toString();
console.log('\n', val);
console.log('\n', typeof val);

// Com Boolean
val = (true).toString();
console.log('\n', val);
console.log('\n', typeof val);

// String para numeros

val = Number('5');
console.log('\n', val);
console.log('\n', typeof val);
console.log('\n', val.toFixed(2)); // <---- toFixed serve para lidar com decimais

// Numero que recebe boolean tem uma peculiaridade
val = Number(true);
console.log('\n', val);
console.log('\n', typeof val);
// Aqui, podemos ver que retorna 1. Vamos ver o próximo caso

val = Number(false); // <----- mudei para false
console.log('\n', val);
console.log('\n', typeof val);
// E temos como saída 0. Isso é muito interessante, pois 0
// por padrão está assimilado a condição false quando represen-
// tamos Booleans numericamente.


// Converter Strings para Numeros

// String para inteiros
val = parseInt('100'); // <----- Note que o numero está entre strings
console.log('\n', val);
console.log('\n', typeof val);


// String para Floats
val = parseFloat('100.56'); // <----- Note que o numero está entre strings
console.log('\n', val);
console.log('\n', typeof val);

// Soma de um numero com string

const valor1 = '5';
const valor2 = 6;
const soma = valor1 + valor2;
console.log('\n', soma);
console.log('\n', typeof soma);

// O que o JavaScript fez foi na verdade concatenar um numero
// com uma String, e por isso, temos como resultado 56.

