/* "id":1003,
"title": "Functions",
"description": "Declaración y uso de funciones en JavaScript, incluyendo funciones anónimas y de flecha.", */


//Funciones normales

function saludar(nombre) {
    console.log("Bienvenid@, " + nombre)
}

saludar("Greta");

//Anónimas

const multiplicar = function(a,b) {
    return a*b;
}

console.log(multiplicar(10,2));

//Flecha (arrow)

const sumar = (a,b) => {
    return a + b;
}

console.log(sumar(8,8));
