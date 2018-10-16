const firstName = 'Italo';
const lastName = 'Felipe';
const age = 20;
const str = 'Hello there, my name is Italo Felipe';

let val;

// Uma simples soma de strings
val = firstName + lastName;
console.log('\n', val);


// Concatenação:
val = firstName + ' ' + lastName;
console.log('\n', val);

// Adicionar a uma variável
val = 'Richard ';
val = 'Marto'; // Marto está sobrescrevendo Richard
console.log('\n', val);

// Para resolver isso, basta:
val = 'Richard ';
val += 'Marto'; // Marto está sobrescrevendo Richard
console.log('\n', val);

// Outros exemplos de concatenação
val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log('\n', val)

// Escaping (palavras que exigem aspas. No lugar onde tiver aspas, 
// basta acrescentar uma contrabarra)
val = 'That\'s awesome, I can\'t wait';
console.log('\n', val)

// Length (comprimento): Retorna o numero de letras na string
val = firstName.length;
console.log('\n', val);

// Concat: Concatenar Strings
val = firstName.concat(' ', lastName);
console.log('\n', val);

// Tornar maiúsculo
val = firstName.toUpperCase();
console.log('\n', val);

// Tornar minúsculo
val = firstName.toLowerCase();
console.log('\n', val);

// Pegar alguma letra dentro da string (recebe índice como array):
val = firstName[0];
console.log('\n', val);

// Achar alguma letra dentro de uma 
// string(se retornar - 1 é pq a letra nao existe na String):
val = firstName.indexOf('t');
console.log('\n', val);

// Ver em qual índice uma letra se encontra
val = firstName.charAt('2')
console.log('\n', val);

// Obter sempre a última letra em uma string:
val = firstName.charAt(firstName.length - 1)
console.log('\n', val);

// Sub-string: primeiro paâmetro é onde quer começar,
// segundo parâmetro é onde quer parar de capturar
// elementos da String.
val = firstName.substring(0, 4);
console.log('\n', val);

// Slice: Obter um pedaço da String. Tb é muito usado
// em arrays.
val = firstName.slice(0, 3);
console.log('\n', val);

// Split: Dividir uma String em um Array:
val = str.split(' ');
console.log('\n', val);

// Replace - Substituir algo passado no primeiro parâmetro por
// algo passado no segundo parâmetro.
val = str.replace('Hello', 'Hey')
console.log('\n', val);

// Includes- Retorna true ou false baseado no que está na string:
val = str.includes('Hello'); // Retorna true pq hello está em str
console.log('\n', val);