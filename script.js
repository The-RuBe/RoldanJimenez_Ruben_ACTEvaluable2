let arrayNotas = [];
let respuesta;
let nota = 0;

function introducirNota() {
    do {
        nota = parseFloat(window.prompt("Introduce una nota válida:"));
    } while (nota < 0 || nota > 10);
}

do {
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

    switch (respuesta) {
        case "A":
            introducirNota();
            arrayNotas.unshift(nota);
            break;

        case "B":
            introducirNota();
            arrayNotas.push(nota);
            break;

        case "C":
            let suma = 0;
            do {
                suma = parseFloat(window.prompt("Introduce un número válido:"));
            } while (isNaN(suma) || suma < 0 || suma > 10);

            for (i = 0; i < arrayNotas.length; i++) {
                if (arrayNotas[i] + suma > 10) {
                    arrayNotas[i] = 10;
                } else {
                    arrayNotas[i] += suma;
                }
            }
            break;

        case "D":
            let moda = 0;
            let maximo = -Infinity;
            let minimo = Infinity;
            let media = 0;

            if (arrayNotas.length == 0) {
                window.alert("La lista de notas está vacía, no es posible calcular las estadísticas.");
            } else {
                for (i = 0; i < arrayNotas.length; i++) {
                    // Me falta la moda
                    if (arrayNotas[i] > maximo) {
                        maximo = arrayNotas[i];
                    } else if (arrayNotas[i] > minimo) {
                        minimo = arrayNotas[i];
                    }
                    media += arrayNotas[i];
                }
                window.alert("La moda es: " + moda + "\n",
                    "El máximo es: " + maximo + "\n",
                    "La mínimo es: " + minimo + "\n",
                    "La media es: " + media + "\n")
            }
            break;

        case "E":
            arrayNotas = []
            window.alert("La lista está vacía");
            break;

        case "F":
            let numNotas = 0;
            let notas = 0;

            do {
                numNotas = window.prompt("Introduce un número de notas válido: ");
            } while (numNotas <= 0);
            notas = introducirNota();

            for (i = 0; i < numNotas; i++) {
                arrayNotas[i] = notas;
            }

            break;

        case "G":
            if (arrayNotas.length == 0) {
                window.alert("La lista está vacía");
            } else {
                arrayNotas.shift();
                if (arrayNotas.length == 0) {
                    console.alert("La lista ha quedado vacía");
                }

            }
            break;

        case "H":
            if (arrayNotas.length > 2) {
                arrayNotas.splice(2, 1);
            } else {
                window.alert("No existe una segunda nota");
            }
            break;

        case "I":
            for (i = 0; i < arrayNotas.length; i++) {
                if(arrayNotas[i] < 5) {
                    arrayNotas[i] = 0;
                }
            }

    }
} while (respuesta = "M");