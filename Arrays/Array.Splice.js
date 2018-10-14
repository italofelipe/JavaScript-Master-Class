// Tirando vários itens do array. Primeiro parãmetro é a partir de qual elementos vamos remover.
// Segundo parâmentro é até onde vamos remover

//Adicionando algo no começo do Array
const role = [
	'Fernando',
	'Japa',
	'Italo',
	'Krysten',
	'Isabel',
	'Valentina',
	sumidos = {undergroud: 'Rafael'},
	'Olisses'
]


role.splice(0, 2);
console.log(role)


// Colocando os elementos removidos em uma nova variável
const removidos = role.splice(0, 2);
console.log(removidos)