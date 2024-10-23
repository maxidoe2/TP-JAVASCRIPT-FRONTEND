// Ejercicio 1.2 - Suma a + b = c
export const ejercicio1_2 = () => {
    const a = 5, b = 10;
    const c = a + b;
    console.log(`La suma de a y b es: ${c}`);
};

// Ejercicio 1.3 - Nombre del usuario
export const ejercicio1_3 = () => {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    console.log(`Hola, ${nombre}!`);
};

// Ejercicio 2.1 - Mayor de a y b
export const ejercicio2_1 = () => {
    const a = 7, b = 12;
    const mayor = a > b ? a : b;
    console.log(`El mayor es: ${mayor}`);
};

// Ejercicio 2.2 - Determinar si es par o impar
export const ejercicio2_2 = () => {
    const numero = parseInt(prompt("Por favor, ingresa un número:"));
    const resultado = numero % 2 === 0 ? "par" : "impar";
    console.log(`El número ${numero} es ${resultado}.`);
};

// Ejercicio 3.1 - Bucle while
export const bucleWhile = () => {
    let numero = 10;
    while (numero > 0) {
        console.log(numero--);
    }
};

// Ejercicio 3.2 - Bucle do...while
export const bucleDoWhile = () => {
    let numero;
    do {
        numero = parseInt(prompt("Ingresa un número mayor a 100:"));
    } while (numero <= 100);
    console.log(`Ingresaste un número mayor a 100: ${numero}`);
};

// Ejercicio 4.1 - Función esPar
export const probarEsPar = () => {
    const numero = parseInt(prompt("Ingresa un número:"));
    console.log(`El número ${numero} es par: ${esPar(numero)}`);
};

export const esPar = numero => numero % 2 === 0;

// Ejercicio 4.2 - Convertir Celsius a Fahrenheit
export const convertirTemperatura = () => {
    const celsius = parseFloat(prompt("Ingresa la temperatura en Celsius:"));
    console.log(`${celsius}°C son equivalentes a ${convertirCelsiusAFahrenheit(celsius)}°F`);
};

export const convertirCelsiusAFahrenheit = celsius => celsius * 1.8 + 32;

// Ejercicio 5.1 - Objeto Persona
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Mendoza",
    cambiarCiudad(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

export const cambiarCiudad = () => {
    const nuevaCiudad = prompt("Ingresa la nueva ciudad:");
    persona.cambiarCiudad(nuevaCiudad);
    console.log(persona);
};

// Ejercicio 5.2 - Objeto Libro
const libro = {
    titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    año: 2008,
    esAntiguo() {
        return (new Date().getFullYear() - this.año) > 10;
    }
};

export const verificarAntiguedadLibro = () => {
    console.log(`El libro ${libro.titulo} es antiguo: ${libro.esAntiguo()}`);
};

// Ejercicio 6.1 - Multiplicar Array
export const multiplicarArray = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numerosMultiplicados = numeros.map(n => n * 2);
    console.log("Números Original:", numeros);
    console.log("Números Multiplicados:", numerosMultiplicados);
};

// Ejercicio 6.2 - Generar Pares
export const generarPares = () => {
    const pares = [];
    for (let i = 1; pares.length < 10; i++) {
        if (i % 2 === 0) pares.push(i);
    }
    console.log(`Primeros 10 números pares: ${pares}`);
};

// Ejercicio 7.1 - Cambiar color de párrafos
export const cambiarColor = () => {
    document.querySelectorAll("p").forEach(p => p.style.color = "blue");
};

export const cambiarColorNegro = () => {
    document.querySelectorAll("p").forEach(p => p.style.color = "black");
};

// Ejercicio 7.2 - Mostrar valor del formulario
export const mostrarAlerta = () => {
    const valor = document.getElementById("campoTexto").value;
    alert(`Valor ingresado: ${valor}`);
};

// Ejercicio 8.1 - Evento en lista
export const mostrarElementosEnConsola = () => {
    document.querySelectorAll('#listaElementos li').forEach(item => {
        console.log(item.textContent);
    });
};

// Ejercicio 8.2 - Deshabilitar y Habilitar campo de texto
export const deshabilitar = () => {
    document.getElementById("campoTexto2").disabled = true;
};

export const habilitar = () => {
    document.getElementById("campoTexto2").disabled = false;
};

// Ejercicio 9.1 - LocalStorage
export const guardarCorreo = () => {
    const correo = document.getElementById("correo").value;
    localStorage.setItem("correo", correo);
    mostrarCorreo();
};

export const mostrarCorreo = () => {
    const correo = localStorage.getItem("correo");
    document.getElementById("correoGuardado").textContent = correo
        ? `Correo guardado: ${correo}`
        : "";
};

export const eliminarCorreo = () => {
    localStorage.removeItem("correo");
    document.getElementById("correoGuardado").textContent = "";
};

window.onload = mostrarCorreo;
