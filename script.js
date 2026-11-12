// Ejercicio 1(Listas): Gestión de notas de una clase
// Desarrolla un programa en JavaScript que permita gestionar las notas de
// los alumnos de una clase mediante una lista (array) de tamaño variable.

// El programa comenzará con una lista de notas vacía y mostrará un menú
// interactivo que permita al usuario realizar diferentes operaciones sobre ella
let arrayNotas = [];
let respuesta;
let nota = 0;

// Función para introducir notas y validarlas
function introducirNota() {
    do {
        nota = parseFloat(window.prompt("Introduce una nota válida:"));
    } while (nota < 0 || nota > 10);
    return nota;
}

// Función para calcular la moda
function calcularModa(arrayNotas) {
    let moda = null;
    let maxRepeticiones = 0;
    let hayEmpate = false;

    for (let i = 0; i < arrayNotas.length; i++) {
        let contador = 0;
        for (let j = 0; j < arrayNotas.length; j++) {
            if (arrayNotas[i] === arrayNotas[j]) {
                contador++;
            }
        }

        if (contador > maxRepeticiones) {
            maxRepeticiones = contador;
            moda = arrayNotas[i];
            hayEmpate = false;
        } else if (contador === maxRepeticiones && arrayNotas[i] !== moda) {
            hayEmpate = true;
        }
    }

    if (hayEmpate) {
        return "Hay empate";
    }

    return moda;
}

do {
    // Opciones del menú
    respuesta = window.prompt("Introduce tu opción: ",
        "A. Introducir una nota al principio \n",
        "B. Introducir una nota al final \n",
        "C. Subir todas las notas X puntos \n",
        "D. Calcular estadísticas actuales \n",
        "E. Vaciar notas \n",
        "F. Inicializar N notas a valor X \n",
        "G. Eliminar la primera nota \n",
        "H. Eliminar la segunda nota \n",
        "I. Establecer a 0 todos los suspensos \n",
        "J. Sustituir una nota por otra \n",
        "K. Añadir una nota en una posición determinada \n",
        "L. Contar el número de suspensos \n",
        "M. Salir \n").toUpperCase;

    // El programa deberá implementar las siguientes funcionalidades:
    switch (respuesta) {

        // A. Introducir una nota al principio
        case "A":
            // a. Solicitar una nota al usuario.
            nota = introducirNota();
            // b. Insertarla al principio de la lista.
            arrayNotas.unshift(nota);
            break;


        // B. Introducir una nota al final
        case "B":
            // a. Solicitar una nota al usuario.
            nota = introducirNota();
            // b. Añadirla al final de la lista.
            arrayNotas.push(nota);
            break;

        // C. Subir todas las notas X puntos
        case "C":
            let suma = 0;
            do {
                // a. Solicitar cuántos puntos se quieren sumar.
                suma = parseFloat(window.prompt("Introduce un número válido:"));
            } while (isNaN(suma) || suma < 0 || suma > 10);

            // b. Incrementar todas las notas de la lista en esa cantidad.
            for (i = 0; i < arrayNotas.length; i++) {
                if (arrayNotas[i] + suma > 10) {
                    arrayNotas[i] = 10;
                } else {
                    arrayNotas[i] += suma;
                }
            }
            break;

        // D. Calcular estadísticas actuales
        case "D":
            let moda = 0;
            let maximo = -Infinity;
            let minimo = Infinity;
            let media = 0;

            if (arrayNotas.length == 0) {
                // f. En caso de que la lista esté vacía, se deberá informar al
                // usuario de que no es posible calcular las estadísticas.
                window.alert("La lista de notas está vacía, no es posible calcular las estadísticas.");
            } else {
                for (i = 0; i < arrayNotas.length; i++) {
                    // b. Moda: nota que más veces aparece en la lista.
                    moda = calcularModa(arrayNotas);
                    if (arrayNotas[i] > maximo) {
                        // c. Máximo: nota más alta.
                        maximo = arrayNotas[i];
                    } else if (arrayNotas[i] > minimo) {
                        // d. Mínimo: nota más baja.
                        minimo = arrayNotas[i];
                    }
                    // e. Media: promedio de todas las notas.
                    media += arrayNotas[i];
                }

                // a. Mostrar las siguientes estadísticas:
                window.alert("La moda es: " + moda + "\n",
                    "El máximo es: " + maximo + "\n",
                    "La mínimo es: " + minimo + "\n",
                    "La media es: " + media / arrayNotas.length + "\n")
            }
            break;

        // E. Vaciar notas
        case "E":
            // a. Eliminar todos los elementos de la lista.
            arrayNotas = []
            // b. Mostrar un mensaje confirmando que la lista está vacía.
            window.alert("La lista está vacía");
            break;

        // F. Inicializar N notas a valor X
        case "F":
            let numNotas = 0;
            let notas = 0;

            do {
                // a. Solicitar al usuario el número de notas que desea generar.
                numNotas = parseInt(window.prompt("Introduce un número de notas válido: "));
            } while (numNotas <= 0);

            // b. Solicitar el valor que tendrán todas esas notas.
            notas = introducirNota();

            // c. Sustituir el contenido actual de la lista por las nuevas notas.
            for (i = 0; i < numNotas; i++) {
                arrayNotas[i] = notas;
            }

            break;

        // G. Eliminar la primera nota
        case "G":
            if (arrayNotas.length == 0) {
                // b. Informar si la lista estaba vacía.
                window.alert("La lista está vacía");
            } else {
                // a. Eliminar el primer elemento de la lista.
                arrayNotas.shift();
                if (arrayNotas.length == 0) {
                    console.alert("La lista ha quedado vacía");
                }

            }
            break;

        // H. Eliminar la segunda nota
        case "H":
            // b. Comprobar que existe una segunda nota antes de eliminarla.
            if (arrayNotas.length > 2) {
                // a. Eliminar el segundo elemento de la lista.
                arrayNotas.splice(2, 1);
            } else {
                window.alert("No existe una segunda nota");
            }
            break;

        // I. Establecer a 0 todos los suspensos
        case "I":
            // a. Recorrer la lista.
            for (i = 0; i < arrayNotas.length; i++) {
                if (arrayNotas[i] < 5) {
                    // b. Sustituir por 0 todas las notas inferiores a 5.
                    arrayNotas[i] = 0;
                }
            }
            break;

        // J. Sustituir una nota por otra
        case "J":
            let origen = 0;
            let destino = 0;

            // a. Solicitar una nota de origen y otra de destino.
            do {
                origen = parseFloat(window.prompt("Introduce un número de origen válido: "));
            } while (origen < 0 || origen > 10);
            do {
                origen = parseFloat(window.prompt("Introduce un número de destino válido: "));
            } while (destino < 0 || destino > 10);

            for (i = 0; i < arrayNotas.length; i++) {
                // b. Sustituir todas las apariciones de la nota de origen por la nota
                // de destino.
                if (arrayNotas[i] == origen) {
                    arrayNotas[i] = destino;
                }
            }
            break;

        // K. Añadir una nota en una posición determinada
        case "K":
            let pos = 0;
            // a. Solicitar una nota.
            nota = introducirNota();
            // b. Solicitar la posición en la que se desea insertar.
            do {
                pos = parseInt(window.prompt("Introduce la posición: "));
            } while (pos < arrayNotas.length - 1 || pos < 0);
            // c. Insertar la nota en esa posición, desplazando los elementos posteriores.
            arrayNotas.splice(pos, 0, nota);
            break;

        // L. Contar el número de suspensos
        case "L":
            let cont = 0;
            // a. Recorrer la lista.
            for (i = 0; i < arrayNotas.length; i++) {
                // b. Contar cuántas notas son inferiores a 5.
                if (arrayNotas[i] < 5) {
                    cont++;
                }
            }
            // c. Mostrar el número total de suspensos.
            window.alert("El número de suspensos es: " + cont);
            break;

        // El caso M para salir
        case "M":
            exit;
            break;

        default:
            // En el caso de que no entre en ninguna opción.
            console.alert("Introduce una opción válida.");
            break;
    }

    // El menú deberá repetirse continuamente hasta que el usuario seleccione la
    // opción de salir.
} while (respuesta = "M"); 