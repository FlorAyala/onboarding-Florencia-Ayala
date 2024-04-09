 //1-2 
 let boton = document.querySelector("form")
 let wall = document.getElementById("wall")
 let text = document.getElementById("texto")
 boton.addEventListener("submit", e=>{
 e.preventDefault()  
 createSquare(wall)
 })
 
 let createSquare = (place)=>{
 let square = `<div class="w-[300px] h-[300px] bg-purple-300 mt-4 rounded-lg"><p class="text-center">${text.value}</p></div>`
 let renderSquare = (item)=>template=item;
 place.innerHTML=renderSquare(square)
 }
  