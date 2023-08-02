/* let colecInput = document.querySelectorAll('input')
let form = document.querySelector('form')
let btn = document.querySelector('button')
btn.style=`margin-top:2%` */
//Ejercicio ---> 1
/* let nameA='Alfredo'
last='Morales'
age=31
city='Madrid'
country='España' 
courses=['Mat','Fis','Quim']; */
//Ejercicio ---> 2
/* localStorage.setItem('nombre',name)
localStorage.setItem('edad',age)
localStorage.setItem('ciudad',city) */
//Ejercicio ---> 3
/* 

const crearObjeto =()=> {
    return  {   
        firstname:colecInput[0].value,
        lastname:colecInput[1].value,
        age:colecInput[2].value*1,
        courses:[colecInput[3].value],
        country:colecInput[4].value,
        city:colecInput[5].value
    }

}
let students=[] 
btn.addEventListener('click',()=>{
    students.unshift(crearObjeto()) //unshift informacion al array students
    event.preventDefault(); //detenemos para visualizar informacion
  return localStorage.setItem('student',JSON.stringify(students))
     
}) */
//Ejercicio ---> 4
let body = document.querySelector('body')
let divContent = document.createElement('div')
let tituloPok = document.createElement('div')

body.appendChild(tituloPok)
body.appendChild(divContent)
body.style = `display:flex; flex-direction:column;align-items:center;min-width:800px;background-color:#6e6374;`
tituloPok.style=`width:30rem; height:8rem;background-image: Url('titulo.png');background-repeat:no-repeat;background-position:center;background-size:80%;margin-top:2%;margin-bottom:1%`
divContent.style = `display:flex;justify-content:center;height:auto;width:700px;flex-wrap: wrap;gap:1%`//

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


let car = []
const createCard = () => {

    pokemons.forEach(pokemon => {
        let divCard = document.createElement('div')
        let h = document.createElement('h5')
        let imagen = document.createElement('img')
        let btn = document.createElement('button')

        h.innerText = pokemon.name
        imagen.src = pokemon.img
        pokemon.id = uuid()
        btn.id = uuid()
        
        divContent.appendChild(divCard)
        divCard.appendChild(h);
        divCard.appendChild(imagen)
        divCard.appendChild(btn)
        divCard.style = `width:180px;height:240px; display:flex; flex-direction:column; align-items:center; border-radius:2px;background-image: url('4.png'); background-position:center;background-size:cover`//background:linear-gradient(rgb(255, 0, 0) 50%, rgb(255, 253, 253) 50%);
        h.style = `width:fit-content;height:1%;margin-top:21%;margin-left:7%;color:black;font-family:Verdana, Geneva, Tahoma, sans-serif;text-transform:capitalize;font-size:14px;font-weight: 900;letter-spacing:.5px;`
        imagen.style=`margin-left:7%;margin-top:8%`
        btn.setAttribute('type', 'submit')
        btn.style = `width:fit-content;height:8%;margin-top:9%;margin-left:8%;font-size:9px;font-weight:bold`
        btn.innerText = `Comprar`

        btn.addEventListener('click', () => {
            car.unshift(pokemon)
            localStorage.setItem('Pokemons', JSON.stringify(car));
        })

    })//end forEach

}//end createCard

createCard()
