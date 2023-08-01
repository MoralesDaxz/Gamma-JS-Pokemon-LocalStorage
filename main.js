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
body.style=`display:flex; justify-content:center;height:1000px;min-width:800px`
let divContent = document.createElement('div')
body.appendChild(divContent)
divContent.style=`display:flex;justify-content:center;height:1000px;width:350px;flex-wrap: wrap;gap:1%;`//


    const pokemons = [
        { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
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


    const createCard=()=>{

        for (let i = 0; i < 20; i++) {
            let divCard = document.createElement('div')
            divCard.id=pokemons[i].id
            divContent.appendChild(divCard)
            divCard.style=`width:90px;height:180px; display:flex; flex-direction:column; align-items:center; border: solid 1px #000;`
            let h= document.createElement('h5')
            h.innerText=pokemons[i].name
            divCard.appendChild(h);
            let imagen = document.createElement('img')
            imagen.src=pokemons[i].img
            divCard.appendChild(imagen)
            let btn = document.createElement('button')
            btn.setAttribute('type','submit')
            btn.innerText=`Comprar`
            divCard.appendChild(btn)
            
        }
      

    }
createCard()
    