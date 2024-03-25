//console.log("hola")

//Difficulty Level: Low

//1.

/*  let numero = parseInt(prompt("ingrese un numero entre 1 y 100"))
let array = []
 for (let index = 0; index < numero;  numero = numero - 1) {   
   array.push(numero)    
}
console.log(array)  */


//2.
/* let numero =parseInt(prompt("ingrese un numero entre 1 y 10"))
for (let index = 1; index <= 10; index++) {

    console.log(index + " X " +numero+ " = "+(index*numero) )
}
 */


//3.

/*
let numero
let suma = 0
 while (numero != 0) {
  numero = parseInt(prompt("ingrese un numero "))
  suma = suma + numero
  
}
console.log("la suma de los numero es :" + parseInt(suma)) */

//4.
/* let numero
let suma = 0
do {
  numero = parseInt(prompt("ingrese un numero "))
  suma = suma + numero  
} while (numero != 0);
console.log("la suma de los numero es :" + parseInt(suma)) */

//5
/* let alumno ={
  name : "flor",
  lastName : "ayala",
  origin : "Mar del Plata",
  studies : "MindHub",

} */
/* for (const key in alumno) {
  if (Object.hasOwnProperty.call(alumno, key)) {
    console.log(key);

  }
} */

/* for (const key in alumno) {
  if (Object.hasOwnProperty.call(alumno, key)) {
    console.log(alumno[key]);

  }
} */


//Difficulty Level: Medium
//1.
/* let numero
let contador = 0
let numSecreto = Math.floor(Math.random() * 100)
//console.log(numSecreto);
while (numero != numSecreto) {
  numero = parseInt(prompt("Entre a number"))
  if (numero > numSecreto) {
    console.log("the number entered is greater than the secret");
  }
  else {
    console.log("the number entered is less than the secret");
  }
  contador += 1
}
alert("You got it right! The secret number was " + numSecreto + " and you made " + parseInt(contador) + " attempts") */

//2
/* let num = parseInt(prompt("Enter a number: "))

for (let divisor = 2; divisor < num/2; divisor++) {
  if (num % divisor === 0) {
    console.log("los divide "+divisor );
  }
}
 */

//3.
/* function RingBell() {
  console.log("Ding Dong");
  return "Ding Dong,"
}

let num = prompt("Entre a number")
for (let index = 0; index < num; index++) {
  RingBell()
} */


//4.
/* const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
for (const iterator of dates) {
  //console.log(iterator);
  if(dateLimit <= iterator){
    console.log(iterator);
  }
} */

//5.
/* let color = ["red", "green", "blue", "violet", "brown", "black", "white"]
for (const iterator of color) {
  console.log(iterator);
} */

//6.
/* function colors() {
  let color = ["red", "green", "blue", "violet", "brown", "black", "white"]
for (const iterator of color) {
  console.log(iterator);
}
}
colors() */

//7.
/* let numeros =[5, 8, 6,10,15]
for (const iterator of numeros) {
  let doble = iterator *2
  console.log("El numero es: "+iterator+" y su doble es: "+doble);
} */

//8.
/* let padre = { nombre: `Juan`, apellido: `Pérez`, edad: 38, miembro: `padre` }
let madre = { nombre: `Maria`, apellido: `Pérez`, edad: 36, miembro: `madre` }
let hija = { nombre: `Laura`, apellido: `Pérez`, edad: 15, miembro: `hija` }
let hijo = { nombre: `Marcos`, apellido: `Pérez`, edad: 13, miembro: `hijo` }

function familia(object) {

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      console.log("Hola, soy " + object.nombre+ ' '+ object.apellido+" ("+object.miembro +")"+ " y tengo "+ object.edad+ " años.");

    }
  }
}
familia(padre)
familia(madre)
familia(hija)
familia(hijo) */

//Difficulty Level: High
//1.


/* let numero
let pares = 0
let impares = 0
do {
  numero = parseInt(prompt("Entre a number"))
  if (numero % 2 == 0) {
    pares = pares + numero
  }
  else {
    impares = impares + numero
  }
} while (numero != 0);
console.log("la suma de los numeros pares es: " + parseInt(pares));
console.log("la suma de los numeros impares es: " + parseInt(impares)); */


//2.
//prueba n°1
/* let arrayNumeros =[2, 3, 5, 7, 20, 50, 6, 45, 3, 1]
console.log(Math.max(...arrayNumeros));

//pueba n° 2, con ingreso de los 10 numeros por teclado
let array2 = []
for (let index = 0; index < 10; index++) {
  let num = parseInt(prompt("Ingrese 10 numeros"))
  array2.push(num)
}
console.log(Math.max(...array2));  
 */

