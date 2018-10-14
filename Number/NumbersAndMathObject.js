const num1 = 100;
const num2 = 50;

let val;

// Matemática simples

// Soma
val = num1 + num2;
console.log('\n', val);

// Subtração
val = num1 - num2;
console.log('\n', val);

// Divisão
val = num1 / num2;
console.log('\n', val);

// Multiplicação
val = num1 * num2;
console.log('\n', val);

// Operador Módulo (resto de divisão)
val = num1 % num2;
console.log('\n', val);


// Objeto Math, que nos dá "superpoderes" com operações
// matemáticas em JavaScript

// PI em JavaScript
val = Math.PI;
console.log('\n', val);

// Numeros de Euler
val = Math.E;
console.log('\n', val);

// Arredondar numeros
val = Math.round(2.8); // Decimal maior que 5 arredonda pra cima, 
// decimal menor que 5 arredonda pra baixo
console.log('\n', val);

// Especificando o arredondamento para mais:
val = Math.ceil(2.4);
console.log('\n', val);

// Especificando o arredondamento para menos:
val = Math.floor(2.4);
console.log('\n', val);

// Raiz quadrada
val = Math.sqrt(16);
console.log('\n', val);

// Numeros absolutos (distância até o 0)
val = Math.abs(-60);
console.log('\n', val);

// Potência
val = Math.pow(8, 2); // Primeiro argumento é o numero,
// segundo argumento é o expoente.
console.log('\n', val);

// Achar o menor numero dentre uma coleção de numeros:
val = Math.min(-64, 10, 20, 30, 40);
console.log('\n', val);

// Achar o maior numero dentre uma coleção de numeros:
val = Math.max(10, 20, 30, 40, 650);
console.log('\n', val);

// Numeros aleatórios:
val = Math.random(); // Retorna numero aleatório entre 0 e 1.
console.log('\n', val);

// Uma maneira mais elegante de receber numeros aleatórios
val = Math.random().toPrecision(2) * 100;
console.log('\n', val);


