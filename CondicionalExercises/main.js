// console.log("hola")

//Difficulty Level: Low
//1.
// let num1 = prompt("enter the first number: ");
// let num2 = prompt("enter the second number: ");

/* if (num1 >= num2) {
    console.log("Number one is: " + num1)
} else {
    console.log("The second number is: " + num2)
} */


//2.
/* if (num1 > num2) {
    console.log("Number one is: " + num1)
} else if (num1 < num2) {
    console.log("The second number is: " + num2)
} else {
    console.log("The numbers are equal")
} */

//3.
/* if (num2 == num1) {
    console.log("The numbers are equal")
} else {
    console.log("The numbers are different")
} */


//4.

// let date1 = "2018-9-2";
// let date2 = "2023-7-5";

/* if (date1 > date2) {
    console.log(`The date ` + date1 + `is greater than ` + date2)
}
else if (date1 === date2) {
    console.log(`The dates are the same`)
}
else {
    console.log(`The date ` + date2 + `is greater than ` + date1)
} */

//5.
/*  let date1 = prompt("ingrese una fecha, con - entreaño, mes y dia. ej (2018-9-2)");
 let date2 = prompt("ingrese una fecha, con - entreaño, mes y dia. ej (2018-9-2)");

 if (date1 > date2) {
    console.log(`The date ` + date1 + `is greater than ` + date2)
}
else if (date1 === date2) {
    console.log(`The dates are the same`)
}
else {
    console.log(`The date ` + date2 + `is greater than ` + date1)
}  */
//6.
/* let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log("The number " + number1 + " is the largest")

} else if (number2 > number1 && number2 > number3) {
    console.log("The number " + number2 + " is the largest")
}
else if (number3 > number1 && number3 > number2) {
    console.log("The number " + number3 + " is the largest")

} else {
    console.log(`They are all the same`)
}
 */

//Difficulty Level: Medium

//1.

/*
let color = prompt("Enter one of these three colors:  red, blue or green")
 switch (color) {
   case "red":
        console.log("The color of passion")
         break;
    case "blue":
        console.log("The color of the sea")
        break;
     case "green":
         console.log("The color of nature")
         break;
     default:
    console.log("It is not any of the requested colors")
} */


//2.
/* let number = prompt("enter the first number (1 to 100):")
let number2 = prompt("enter the second number (1 to 100) :")
let operacion = "division"
switch (operacion) {
    case "sum":
        console.log("the sum of " + number + " and " + number2 + " is: " + (parseInt(number) + parseInt(number2)))
        break;
    case "subtraction":
        console.log("the subtraction of " + number + " and " + number2 + " is: " + (parseInt(number) - parseInt(number2)))
        break;
    case "multiplication":
        console.log("the multiplication of " + number + " and " + number2 + " is: " + (parseInt(number) * parseInt(number2)))
        break;
    case "division":
        console.log("the division of " + number + " and " + number2 + " is: " + (parseInt(number) / parseInt(number2)))
        break;
    default:
        console.log("it is not a number")

} */


//3.
/* let people1 = {
    name: prompt("name?"),
    age: prompt("age?"),
    height: prompt("height?:"),

}
let people2 = {
    name: prompt("name?"),
    age: prompt("age?"),
    height: prompt("height?:"),

}
console.log(people1)
console.log(people2)

if ((people1.age >= people2.age) && (people1.height >= people2.height)) {
    console.log(people1.name + " is taller and older than " + people2.name)
}
else {
    console.log(people2.name + " is taller and older than " + people1.name)
} */

//4.
/* let name = prompt("Enter your name: ")
let age = prompt("Enter your age: ")
let height = prompt("Enter your height in CM: ")
let vision = prompt("Enter your viewing range: ")
if(age>=18 && height > 110 && vision>=8){
    console.log( name + "You are qualified to drive ")
}
else{
    console.log("You dont qualified to drive")
}
 */

//5.
/* let age = prompt("Entre your age: ")
if(0 <= age && 12 >= age){
    alert("infant (0 to 12 years)")
}
else if (13 <= age && 18 >= age){
    alert("adolescent (13 to 18 years old)")
}
else if (19 <= age && 45 >= age){
    alert("older young (19 to 45 years)")
}
else if (46 <= age && 99 >=age){
    alert("elderly (over 45 years)")
}else{
    alert("Is he really that old? (more than 100 show)")
} */


//6.
/* let numOperacion = prompt("Ingrese un numero entre 1 y 3: ")
let datoNumerico = prompt("Ingrese un dato numerico: ")

switch (parseInt(numOperacion)) {
    case 1:
        alert("The number entered is : " + datoNumerico)

        break;
    case 2:
        alert("Twice the number entered is : " + (datoNumerico * 2))

        break;
    case 3:
        alert("Three times the number entered is: " + (datoNumerico * 3))
        break;

    default:
        alert("That value is not allowed")
        break;
} */


//Difficulty Level: High

//1.
/* let nameCustomer = prompt("Customer name")
let pass = prompt ("Pass (vip or normal)?")
let entrance = confirm("Entrance (yes or no)")
if(nameCustomer == "flor"){
    alert("Welcome")
    if(pass == "vip"){
        alert("Welcome 2")
    
    }else if (entrance == true){
        alert("welcome 3")
    }else{
        alert("bye 1")
    }

}else{
    let buyTicket = confirm("do you want to buy?")
    if(buyTicket == false){
        alert("bye 2")        
    }else if(buyTicket == true){
        let money = prompt(" available money : ")
        if(money >= 1000){
            alert("Welcome4")

        }else{
            alert("rejection message")
        }
    }
} */