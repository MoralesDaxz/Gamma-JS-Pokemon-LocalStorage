# Gamma-JS-24-Node
Javascript, node.js
Ejercicio 1
Introduce en LocalStorage 3 variables distintas (no en forma de objeto) con tu nombre, edad y ciudad de origen.

Ejercicio 2
Crea un objeto student con los siguientes campos: firstname, lastname, age, country y courses (array de asignaturas). Guárdalo en localStorage.

Ejercicio 3
Ahora crea un formulario para que el usuario pueda rellenar la información del ejercicio anterior. Cuando se envíe el formulario, se deberá guardar el mismo objeto en localStorage.

Bonus Habrás notado que al enviar el formulario se sobrescribe la información que hubiera en localStorage. El reto es lograr quue guarde un array de objetos, de manera que los students se acumulen y no se vayan sobrescribiendo.

Ejercicio 4
Vamos a crear una web de compra-venta ilegal de pokemons. Se te proporcionará un array de objetos con información sobre pokemons. Debes crear 2 páginas de HTML: index y cart.

Pinta en index la información de cada pokemon en forma de card, y añádele un botón de comprar a cada card, como si fuera una tienda online.
El botón debe guardar la información de cada pokemon en LocalStorage, como si fuera un carrito de la compra.
La página cart debe mostrar aquellos pokemons que hayan sido guardados en el LocalStorage. Si no hubiera ninguno, deberá mostrar: "Carrito vacío...".
Por último, en cart, añade a cada pokemon que esté en el carrito un botón para eliminarlo del mismo.
const pokemons = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
	{ id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
	{ id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]