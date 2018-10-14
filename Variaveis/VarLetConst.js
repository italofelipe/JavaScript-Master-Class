var name = 'John Doe';
console.log(name);

// Tentando sobrescrever a var name:
name = 'Italo';
console.log(name);

// Variaveis com mais de uma palavra:

// Padrão Camel Case
var firstName = 'John'; // <------ Padrão usado em JavaScript

// Underscore Convention (Usado em PHP)
var last_name = 'Frusciante';

// Pascal Case:
var MotherName = 'Aline';


// Let

let carro = 'Ferrari';
console.log(carro);

// Veja só o que acontece quando tento sobrescrever
carro = 'Porsche';
console.log(carro);
// Sim, ele cria outra "instância" da mesma variável



// Const

const celular = 'Motorola';
console.log(celular);

// Vamos tentar sobrescrever celular, uma variavel definida com Const

// celular = 'LG' <------ DESCOMENTE PARA VER FUNCIONANDO
// console.log(celular); <------ DESCOMENTE PARA VER FUNCIONANDO


// E então vemos uma enorme tela de Erro no compilador...
// Ou Seja, Const nao podem ser sobrescritas (existem excessões)


// Uma dessas excessões são os objetos

const Italo = {
  fullName: 'Italo Felipe de Araujo Chagas',
  age: 20,
  job: 'JavaScript Programmer'
}

console.log(Italo);

// É aqui que a mágica acontece

Italo.fullName = 'Isabel';
console.log(Italo);
// Sim, ele sobrescreveu um valor, mesmo que a variável 
// tenha sido declarada com const. Isso é o comportamento
// padrão de Objetos, e para mudar isso, temos que ver mais
// sobre criar Objetos usando a função Construtora.