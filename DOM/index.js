//console.log(document.getElementById("titulo"));
let tituloPrincipal = document.getElementById("titulo").className += " mt-5 text-5xl "
let fondosHeader= document.querySelector(".fondo").className = "  bg-orange-400"
let fondosFooter = document.querySelector(".fondo2").className = "  bg-orange-400"
let textoFooter = document.getElementById("footer").innerHTML = " Florencia Ayala- MindHub ©- Cohort 54 "
let estiloFooter = document.getElementById("footer").className += " text-lg"
let contenedor = document.getElementById("contenedorCards")
let tituloFrutasIndex = document.getElementById("tituloFrutas").className += " text-lg"
let contenedorDeListas = document.getElementById("contenedorLista")

let fruta = []
//console.log(fruta);

let frutaDulce = []
//console.log(frutaDulce);

for (const iterator of frutas) {
    fruta.push(iterator);
}

let crearCards = function (objeto) {
    return `<div class="flex flex-col  w-3/4 border-black border-solid border-2 items-center gap-10 rounded-lg md:w-1/3 lg:w-1/4">
    <img class="w-1/2 h-1/2 object-contain " src="${objeto.foto}" alt="${objeto.foto}">
    <h3> ${objeto.nombre}</h3>
    <p class="pl-2 pb-[10px]"> ${objeto.descripcion}"</p>
</div> `
}
for (const iterator of fruta) {
    contenedor.innerHTML += crearCards(iterator)

}
//lista
let listaIndex= document.getElementById("contenedorLista")
listaIndex.innerHTML = "Frutas Dulces"
listaIndex.className += " text-xl  "


function dulces(array) {
    for (const iterator of array) {
        if(iterator.esDulce){
            frutaDulce.push(iterator)
        }
    }
}

(dulces(frutas));

let crearListas = function (objeto) {
    return`
        <li class = "pb-[10px]">${objeto.nombre}</li>
    `
}
for (const iterator of frutaDulce) {
    contenedorDeListas.innerHTML += crearListas(iterator)
}

