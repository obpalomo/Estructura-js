/* "id": 1001,
"title": "Variables and Data Types",
"description": "Declaración de variables usando var, let y const, y comprensión de tipos primitivos y objetos." */

//Declaracion Variables
var nombre = "Oscar"
let edad = 39
const ciudad = "Barcelona"

//Tipos Primitivos

let texto = "Oscar" //String
let numero = 39 //Numero
let esMayorDeEdad = true //Boolean
let variableSinValor //Undefined
let valor = null //Null
let simbolo = Symbol('único') //Simbolo


console.log(typeof texto);
console.log(typeof numero);
console.log(typeof esMayorDeEdad);
console.log(typeof variableSinValor);
console.log(typeof valor);
console.log(typeof simbolo);

//Objeto

let persona = {
    nombre: "Oscar",
    edad: 39,
    ciudad:"Barcelona"
};

console.log(persona.edad);

//Array

let peliculas =['Batman','Barbie','Superman','Piratas del caribe']

console.log(peliculas[2]);

//Funcion

function saludar(){
    console.log('Hola!!');
    
}

saludar();

