//console.log("hola")

//Difficulty Level: Low
//1.
/* function add() {
   return 100 * 20
    
}
//console.log(add ())
let resultado = add()
console.log(resultado) */

//3.
/* function add(num1, num2){
   console.log( num1*num2)

}
add(2, 3) */


//4.
/* let num1 = 100
let num2 = 20

function add(num1, num2) {
    let resultado = (num1 * num2)
    return resultado
}
console.log(add(num1, num2)) */

//5.
/* function add(num1, num2) {
    let resultado = (num1 * num2)
    return resultado
}
let resultadoFinal = add(100, 20)
console.log(resultadoFinal)
 */

//6.
/* let funcionAnonima = function(num1, num2){
    let resultado = (num1 * num2)
    return resultado
}
let resultadoFinal = funcionAnonima (100 ,20)
console.log(resultadoFinal) */

//Difficulty Level: Medium
//1.

/* function greet(name) {
    console.log("Hi! "+ name)
        
}
greet("Flor") */


//2.
/* let fnMultiplicacion = function(num1, num2){
    return num1* num2
}
let resultadoFn = fnMultiplicacion(2,6)
console.log(resultadoFn) */

//3.
/* let num1 = prompt("enter the base of a triangle: ")
let num2 = prompt ("Entre the height of a triangle:  ")
function area(num1, num2){
    let area =((num2*num1)/2)
    return area
}
console.log(area(num1, num2)) */


//4.
/* let sides1 = prompt("Entre fith sides: ")
let sides2 = prompt("Entre second sides: ")
let sides3 = prompt("Entre third sides:  ")
function perimeter(sides1, sides2, sides2){
 let equation = (parseInt(sides1)+ parseInt(sides2)+parseInt(sides3))
 return equation
}
let resultadoEcuacion = perimeter(sides1, sides2, sides3)
console.log(resultadoEcuacion) */

//5.
/* let price = prompt("Entre the price: ")
let product = prompt("Entre the product: ")
function compra(price, product) {
    let total = (price * product)
    if (product >= 10 && 19 >= product) {
        let descuento = ((total * 10) / 100)
        alert("Your discount is: " + descuento)
    } else if (product >= 20 && product <= 29) {
        let descuento = ((total * 20) / 100)
        alert("Your discount is: " + descuento)
    } else {
        alert("discounts do not apply")
    }
}
let compraConDescuentos = compra(parseInt(price), parseInt(product))
console.log(compraConDescuentos) */

//6.
/* let age = prompt("Entre your age: ")
function isAnAdult(age) {
    if(age >= 18){
        console.log("You are an adult")

    }else{
        console.log("You are not an adult")
    }    
}
let edades = isAnAdult(age)
console.log(edades) */

//Difficulty Level: High
//1.

/* 
let ingreso =prompt("cual es su ingreso anual? ")
function impuesto(ingreso) {
    
    if(10000 >= ingreso){
        let impuesto = ((ingreso * 10) / 100)
        console.log("su impuesto es: " + impuesto)
    }
    else if(ingreso >= 10000 || 20000 >= ingreso){
        let impuesto = ((ingreso * 15) / 100)
        alert("su impuesto es: " + impuesto)
    }
    else if(ingreso >= 20000){
        let impuesto = ((ingreso * 20) / 100)
        alert("su impuesto es: " + impuesto)
    }
    else(console.log("no paga impuesto"))

}
impuesto(ingreso)
 */


//2.
/* let day = parseInt(prompt("ingrese un dia de la semana :"))
function diaSemanal(day){
    if( day >= 1 || day <= 5){
        alert("es un dia habil")
    }
    else{
        if(day == 6 || day == 7){
            alert("es fin de semana")
        }
       
    }
}
diaSemanal(day) */

//3.
/* function datosPersonales() {
    let datos = {
        nombre: function () {
            let name = prompt("ingrese su nombre: ")
            if (name != " ") {
                return("su nombre es " + name)

            } else {
                alert("El nombre no puede estar vacio")
            }
        },
        apellido: function () {
            let lastName = prompt("ingrese su apellido: ")
            if (lastName !== " ") {
                return("su apellido es " + lastName)

            } else {
                alert("El apellido no puede estar vacio")
            }
        },
        edad: function () {
            let age =parseInt( prompt("ingrese su edad: "))
            if (age !== " ") {
                return("su edad es " + age)
            } else {
                alert("la edad no puede estar vacio")
            }

        }

    }
    let datosFinales = [datos.nombre(), datos.apellido(),datos.edad()]
    console.log(datosFinales)
   
}
datosPersonales() */

//4.
/* let nombre = prompt("Ingrese su nombre")
function saludo(nombre) {
    return( nombre)
    
}
console.log(saludo(nombre))

let anioActual = parseInt(prompt("ingrese el año actual"))
let anioNacimiento = parseInt(prompt("ingrese su año de nacimiento"))
function edad( anioActual , anioNacimiento){
    let age= (anioActual - anioNacimiento) 
    return age
}
console.log(edad(anioActual, anioNacimiento))

function datos(nombre,anioActual,anioNacimiento) {

        let presentacion = alert("Hola, mi nombre es "+ saludo(nombre)+ " y mi edad es "+edad(anioActual, anioNacimiento))
        return presentacion
}   
datos(nombre,anioActual,anioNacimiento)  */