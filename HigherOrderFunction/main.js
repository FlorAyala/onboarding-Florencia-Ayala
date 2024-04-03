//1 pasar de una funcion declarada tradicionalmete a una funcion flecha
/* function printMessage(message) {
    console.log(message)
}
let primerSms = message =>  message
console.log(primerSms("hola")); */



//2 pasar de una funcion declarada tradicionalmete a un funcion de orden superior
/*  function createMultplication(number1, number2) {
    let result = number1 * number2
    return result
} 
 */

/* let crearMultplication = function (number1, operacion , number2){
    return operacion(number1 ,  number2)
}
let multiplicacion = (number1, number2) => number1*number2
 */
//crearMultplication(2, multiplicacion, 3)
//console.log(crearMultplication(2, multiplicacion, 3)); 



//3 
/*  const array = [ 1,2,3,4,5,6,7,8,9 ]
 let arrayMap = array.map(e => crearMultplication(e,multiplicacion,e))  
console.log(arrayMap); */




//4  filtra en el array(beers) las cervezas que contengan un ibu, luego eligo 10 y las ordena de mayor a menor

console.log(beers)

/*  let cervezasFiltradas = (beers) => beers.filter(cerveza => cerveza.ibu )
console.log(cervezasFiltradas(beers));
console.log(cervezasFiltradas(beers).sort((a,b) => a.ibu - b.ibu).splice(0,10));  
 */

//5
/* let cervezasFiltradas = (beers) => beers.filter(cerveza => cerveza.abv )
console.log(cervezasFiltradas(beers));
console.log(cervezasFiltradas(beers).sort((a,b) => a.abv - b.abv).splice(0,10));*/
 



//6
/*  let nombre = prompt("ingrese el nombre de una cerveza").toLocaleLowerCase

let compracion = (array, nombre) => array.find(e => e.name == nombre)

console.log(compracion(beers, nombre));  */

//7

/* let valor = parseInt(prompt("ingrese :"))
let compracion =  array.find(e => e.ibu == valor )
//console.log(compracion); 


if(compracion ){
    console.log(compracion);
}
else{
    console.log("No hay cerveza con un ibu de (${valor})");
}

*/


//8
/* 
let nombre =prompt("ingrese :").toLocaleLowerCase
let compracion = array.findIndex(e => e.name.toLocaleLowerCase() == nombre )
//console.log(compracion); 


if(compracion !== -1){
    console.log(compracion);
}else{
    console.log("Esa cerveza no existe");
} */
 
  

//9 
/* let ibuValor =parseInt(prompt("ingrese un ibu: "))
let arrayFinal =[]

 let arrayNuevo = (beers) => beers.filter((e) => e.ibu <= ibuValor).map(obj=> {obj = {
    nombre: obj.name,
    Abv: obj.abv,
    Ibu:obj.ibu,
};
arrayFinal.push(obj)
})
 console.log(arrayNuevo(beers));
 console.log(arrayFinal); */




//10
// recibe 3 paramentos, array(cervezas), una propiedad(ebc = medicion del color de la cerveza) y un booleano
//ebc medicion de 4 a 138. rubia =4 a 12 // medio=16 a 39 // alto= 47 a 138
//boolenao = si cumple el ebc alto ordenar ascendente sino desendente66

/*  let valorEBC = 138
//filtro las cervezas para que guarden en el arreglo las que tengas un ebc entre 16 y 138

let filtroCerveza =  beers.filter((e) => e.ebc > 16) //traigo todas las cervezas que tengan un ebc
console.log(filtroCerveza);
let cervezas = (beers, filtroCerveza, booleano) => beers.filter((e) => e.ebc < valorEBC).splice(0,10).sort((a,b) => {
    if(filtroCerveza){
        return a.ebc - b.ebc
    }else{
        return  b.ebc -a.ebc
    }
})
console.log(cervezas(beers ,valorEBC, filtroCerveza));  */
 //10(opcion 2)
/*  let cervezasOrdenadas = (array, prop, booleano) =>{
    if(booleano){
        let ascendente = array.sort((a, b) => a[prop] - b[prop]).splice(0,10)
        return ascendente
    }else{
        let desendente = array.sort((a, b) =>  b[prop] - a[prop]).splice(0,10)
        return desendente
    }

} 
    cervezasOrdenadas(beers, "ibu", true)
 */

//11
 let tablaIndexCervezas = document.getElementById("tablasCervezas")

let crearTabla = obj => `

<tbody>
    <tr class="flex  justify-between p-5">
        <td class=" w-1/2" >${obj.name}</td>
        <td class="" >${obj.ibu}</td>
        <td class="" >${obj.abv}</td>
    </tr>
</tbody>
`

let fragmento = new DocumentFragment()
for (const iterator of beers) {
   let aux = document.createElement("table")
   aux.innerHTML += crearTabla(iterator)
   aux.className ="border-2 w-full "
   fragmento.appendChild(aux) 
}

tablaIndexCervezas.appendChild(fragmento) 
