/* "id": 1002,
"title": "Control Flow",
"description": "Uso de instrucciones condicionales y bucles (if, else, switch, for, while)." */

//Condicionales

let edad = 16
if (edad<18) {
    console.log('Eres menor de edad');
    } else if (edad === 18) {
        console.log('Tienes juto 18 años');
    } else {
        console.log('Eres menor de edad');
        }

// Bucle for

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// Bucle while

let suma = 0;

while (suma <= 50) {
    let aleatorio = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
    console.log("Número generado: " + aleatorio);
    suma += aleatorio;
}

console.log("Suma total: " + suma);


