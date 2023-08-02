let body = document.querySelector('body')
let divCarrito = document.createElement('div')
body.appendChild(divCarrito)
body.style=`background-color:#6e6374`//;
let compra = JSON.parse(localStorage.getItem('Pokemons'))

compra.forEach(und => {
let divCard = document.createElement('div')
let h= document.createElement('h5')
let imagen = document.createElement('img')
let btn = document.createElement('button')
h.innerText=und.name
imagen.src=und.img
btn.id=und.id
divCarrito.appendChild(divCard)
divCard.appendChild(h);
divCard.appendChild(imagen)
divCard.appendChild(btn)

divCarrito.style=`margin-left:35%;display:flex;flex-wrap:wrap;gap:1%;width:700px`
divCard.style=`width:180px;height:240px; display:flex; flex-direction:column; align-items:center; border-radius:2px;background-image: url('4.png'); background-position:center;background-size:cover`//background:linear-gradient(rgb(255, 0, 0) 50%, rgb(255, 253, 253) 50%);
h.style=`width:fit-content;height:1%;margin-top:21%;margin-left:7%;color:black;font-family:Verdana, Geneva, Tahoma, sans-serif;text-transform:capitalize;font-size:14px`
imagen.style=`margin-left:7%;margin-top:8%`
btn.style=`width:fit-content;height:8%;margin-top:9%;margin-left:8%;font-size:9px;font-weight:bold`
btn.setAttribute('type','submit')
btn.innerText=`Eliminar`

btn.addEventListener('click',()=> {
const idEvent =  event.target.id 
const result = compra.filter(i =>i.id != idEvent);//i.id != idEvent elementos diferentes a id Event
event.target.parentElement.remove()
localStorage.setItem('Pokemons',JSON.stringify(result));
compra = JSON.parse(localStorage.getItem('Pokemons'))

    })
});