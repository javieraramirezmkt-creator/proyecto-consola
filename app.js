console.log("JS conectado correctamente");

/******************************************************
 PROYECTO: Aplicación de Consola - Fundamentos JS
 Autor: Javiera Ramirez
 Descripción:
 Aplicación interactiva en consola que permite:
 - Realizar operaciones matemáticas
 - Usar estructuras condicionales y ciclos
 - Trabajar con arreglos y objetos
 - Modularizar el código con funciones
******************************************************/

/* ============================
   MENSAJE DE BIENVENIDA
============================ */

console.log("Bienvenido/a a la Aplicación de Consola 🧮");
alert("Bienvenido/a a la Aplicación de Fundamentos en JavaScript");

/* ============================
   FUNCIONES MATEMÁTICAS
============================ */

// Funciones reutilizables para operaciones básicas

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}

/* ============================
   FUNCIÓN PRINCIPAL
============================ */

function calculadora() {

    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Validación de datos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error: Debe ingresar números válidos.");
        return;
    }

    let operacion = prompt(
        "Seleccione una operación:\n" +
        "1 - Sumar\n" +
        "2 - Restar\n" +
        "3 - Multiplicar\n" +
        "4 - Dividir"
    );

    let resultado;

    // Uso de switch
    switch (operacion) {
        case "1":
            resultado = sumar(numero1, numero2);
            break;
        case "2":
            resultado = restar(numero1, numero2);
            break;
        case "3":
            resultado = multiplicar(numero1, numero2);
            break;
        case "4":
            resultado = dividir(numero1, numero2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert("El resultado es: " + resultado);
    console.log("Resultado:", resultado);
}

/* ============================
   ARREGLOS Y CICLOS
============================ */

// Arreglo simple
const numeros = [10, 20, 30, 40, 50];

console.log("Recorriendo arreglo con FOR:");
for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento:", numeros[i]);
}

// Uso de while
console.log("Recorriendo arreglo con WHILE:");
let contador = 0;
while (contador < numeros.length) {
    console.log("Elemento:", numeros[contador]);
    contador++;
}

// Función que filtra números mayores a 25
function filtrarMayoresA25(lista) {
    return lista.filter(num => num > 25);
}

const numerosFiltrados = filtrarMayoresA25(numeros);
console.log("Números mayores a 25:", numerosFiltrados);

/* ============================
   OBJETOS
============================ */

// Objeto simple
const usuario = {
    nombre: "Javiera",
    edad: 25,
    saludar: function () {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

usuario.saludar();

// Arreglo de objetos
const estudiantes = [
    { nombre: "Ana", nota: 6.5 },
    { nombre: "Pedro", nota: 4.8 },
    { nombre: "Lucía", nota: 5.9 }
];

// Recorrer con forEach
console.log("Listado de estudiantes:");
estudiantes.forEach(est => {
    console.log(est.nombre + " - Nota: " + est.nota);
});

// Usar map para obtener solo nombres
const nombresEstudiantes = estudiantes.map(est => est.nombre);
console.log("Nombres de estudiantes:", nombresEstudiantes);

/* ============================
   MENÚ CON BUCLE
============================ */

function iniciarAplicacion() {
    let continuar = true;

    while (continuar) {
        calculadora();

        let respuesta = prompt("¿Desea realizar otra operación? (si/no)");
        if (respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }

    alert("Gracias por usar la aplicación 👋");
}

// Ejecutar aplicación
iniciarAplicacion();
