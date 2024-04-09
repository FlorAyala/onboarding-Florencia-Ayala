let boton = document.getElementById('boton')
let input = document.getElementById('textoInput')
let contenedor2 = document.getElementById('contenedorDiv2')
let texto = document.getElementById('textoIngresado')
let color = document.getElementById('inputColor')
let input2 =document.getElementById('italic')
let intup3 = document.getElementById('noItalic')



//---------------EJERCICIO 2--------------------
let fontStyle = ''
boton.addEventListener('click', event => {
    event.preventDefault()   
    contenedor2.innerHTML = crearDiv()
   document.getElementById('close').addEventListener('click', () => contenedor2.innerHTML= '')
   //fontStyle.event.target.letras.value
  
     if(input2.checked){
        fontStyle = 'italic'
     }else{
         fontStyle ='not-italic'
     }
   
})
input.addEventListener('keyup', event =>{
   // console.log( event.target.value);
     let texto = event.target.value
     return texto
})


function crearDiv() {
    return `
<div id='contenedor' class="w-[300px] h-[300px] bg-[${color.value}] m-2 ">
<p id="textoIngresado" class=' ${fontStyle} '>${input.value}</p>
<span class='flex justify-end pr-5' id="close">X</span>
 </div>`

}



//console.log(color.value); 


