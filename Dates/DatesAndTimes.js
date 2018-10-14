let val;


// Objeto Date. Se vc nao passar nada como parâmetro,
// por padrão ele virá no dia atual em que o código está sendo
// compilado e executado. 
const today = new Date();

// Ou também podemos definir uma data exata entre strings
let birthDay = new Date('11-25-1997');

// Podemos também escrever datas dessa forma
birthDayExt = new Date('November 25 1997');

// E também desse jeito.
birthDay = new Date('11/25/1997');

val = today;

// console.log(val)
// console.log(birthDay);


// Obter o ano
console.log(birthDay.getFullYear());

// Obter o mês de uma data (datas são Zero-Based, como Arrays) :
console.log(birthDay.getMonth());

// Obter o dia do mês:
console.log(birthDay.getDate());

// Obter o dia da semana (em numero, sendo 1 domingo e 7 sábado):
console.log(birthDay.getDay());


// Podemos também, ver quanto tempo se passou desde uma determinada
// data até o dia de hoje (em milisegundos).
// console.log(birthDay.getTime());

// Mudando a data de algum evento:

console.log(birthDay.setMonth(2));
