let boton = document.getElementById('boton')
let colorDelContenedor = document.getElementById('contColor')
let input = document.getElementById('input')
let parrafo = document.querySelector('p')
let estatura = document.getElementById('estatura')
let peso = document.getElementById('peso')
let boton2 = document.getElementById('boton2')
//1
/*  boton.addEventListener('click', e=>
   
   colorDelContenedor.classList +=' bg-blue-100' 
 
) */

//2

 input.addEventListener('keyup', event =>{
  parrafo.innerText = event.target.value
}) 

//3
/* let altura = 0
estatura.addEventListener('keyup', e => {
  e.preventDefault()
  altura = e.target.value
  console.log(altura);
})

let pesoInput = 0
peso.addEventListener('keyup', e => {
  e.preventDefault()
  pesoInput = e.target.value
  console.log(pesoInput);
})

boton2.addEventListener('click',event =>{

  let resultado = pesoInput/(altura/100)**2
  console.log(resultado);
  alert(resultado)

}) */
 


//4
/* let monedaLocal = document.getElementById('monedaLocal')
let dolares = document.getElementById('dolares')
let convert = document.getElementById('boton3')

let monedaIngresada = 0
monedaLocal.addEventListener('keyup', event =>{
  event.preventDefault()
  monedaIngresada = event.target.value
  console.log(monedaIngresada);
})

let dolaresIngreados =0
dolares.addEventListener('keyup', event =>{
  event.preventDefault()
  dolaresIngreados = event.target.value
  console.log(dolaresIngreados);
})

convert.addEventListener('click', e=>{
  let resultado = ( monedaIngresada * dolaresIngreados ) / 500
  alert(resultado);
}) */

