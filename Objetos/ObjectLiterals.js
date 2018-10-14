const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 25,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports', 'dar o rabo'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function  () {
    return 1993
  } 
}

let val;

// Obter tudo relacionado ao Objeto em questão
val = person;

// Obter um valor específico:
val = [person.getBirthYear(), person.hobbies[2]]

console.log(val)


// Percorrer Objetos com o loop For

const people = [
  {name: 'Italo', age: '20'},
  {name: 'Isabel', age: '21'},
  {name: 'Richard', age: '22'},
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name)
}
