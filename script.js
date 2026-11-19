// Ejercicio 1(Listas): Gestión de notas de una clase
// Desarrolla un programa en JavaScript que permita gestionar las notas de
// los alumnos de una clase mediante una lista (array) de tamaño variable.

// El programa comenzará con una lista de notas vacía y mostrará un menú
// interactivo que permita al usuario realizar diferentes operaciones sobre ella

// Función para introducir notas y validarlas
function introducirNota() {
    let nota = 0;
    do {
        nota = parseFloat(window.prompt("Introduce una nota válida:"));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

// Función para calcular la moda
function calcularModa(arrayNotas) {
    const mapa = new Map();
    let cont = 0;
    let moda = 0;

    for (let nota of arrayNotas) {
        if (mapa.has(nota)) {
            mapa.set(nota, mapa.get(nota) + 1);
        } else {
            mapa.set(nota, 1);
        }
    }

    for (let nota of mapa.keys()) {
        if (cont < mapa.get(nota)) {
            cont = mapa.get(nota);
            moda = nota;
        }
    }
    return moda;
}

function ejercicioI() {
    let arrayNotas = [];
    let nota = 0;
    let salida = false;

    do {
        // Opciones del menú
        const respuesta = window.prompt("Introduce tu opción: \n" +
            "A. Introducir una nota al principio \n" +
            "B. Introducir una nota al final \n" +
            "C. Subir todas las notas X puntos \n" +
            "D. Calcular estadísticas actuales \n" +
            "E. Vaciar notas \n" +
            "F. Inicializar N notas a valor X \n" +
            "G. Eliminar la primera nota \n" +
            "H. Eliminar la segunda nota \n" +
            "I. Establecer a 0 todos los suspensos \n" +
            "J. Sustituir una nota por otra \n" +
            "K. Añadir una nota en una posición determinada \n" +
            "L. Contar el número de suspensos \n" +
            "M. Salir \n").toUpperCase();

        // El programa deberá implementar las siguientes funcionalidades:
        switch (respuesta) {

            // A. Introducir una nota al principio
            case "A":
                // a. Solicitar una nota al usuario.
                // b. Insertarla al principio de la lista.
                arrayNotas.unshift(introducirNota());
                break;

            // B. Introducir una nota al final
            case "B":
                // a. Solicitar una nota al usuario.
                // b. Añadirla al final de la lista.
                arrayNotas.push(introducirNota());
                break;

            // C. Subir todas las notas X puntos
            case "C":
                let suma = 0;

                if (arrayNotas.length == 0) {
                    window.alert("La lista está vacía");
                } else {
                    do {
                        // a. Solicitar cuántos puntos se quieren sumar.
                        suma = parseFloat(window.prompt("Introduce un número válido:"));
                    } while (isNaN(suma) || suma < 0 || suma > 10);

                    // b. Incrementar todas las notas de la lista en esa cantidad.
                    for (let i = 0; i < arrayNotas.length; i++) {
                        if (arrayNotas[i] + suma > 10) {
                            arrayNotas[i] = 10;
                        } else {
                            arrayNotas[i] += suma;
                        }
                    }
                }
                break;

            // D. Calcular estadísticas actuales
            case "D":
                let media = 0;
                let arraySort = [...arrayNotas];

                if (arrayNotas.length == 0) {
                    // f. En caso de que la lista esté vacía, se deberá informar al
                    // usuario de que no es posible calcular las estadísticas.
                    window.alert("La lista de notas está vacía, no es posible calcular las estadísticas.");
                } else {
                    for (let i = 0; i < arrayNotas.length; i++) {
                        // e. Media: promedio de todas las notas.
                        media += arrayNotas[i];
                    }

                    arraySort.sort((a, b) => a - b);
                    // a. Mostrar las siguientes estadísticas:
                    // b. Moda: nota que más veces aparece en la lista.
                    window.alert("La moda es: " + calcularModa(arrayNotas) + "\n" +
                        // c. Máximo: nota más alta.
                        "El máximo es: " + arraySort[arraySort.length - 1] + "\n" +
                        // d. Mínimo: nota más baja.
                        "El mínimo es: " + arraySort[0] + "\n" +
                        "La media es: " + (media / arrayNotas.length).toFixed(2) + "\n");
                }
                break;

            // E. Vaciar notas
            case "E":
                // a. Eliminar todos los elementos de la lista.
                arrayNotas = [];
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
                } while (isNaN(numNotas) || numNotas <= 0);

                // b. Solicitar el valor que tendrán todas esas notas.
                notas = introducirNota();

                // c. Sustituir el contenido actual de la lista por las nuevas notas.
                arrayNotas = new Array(numNotas);
                arrayNotas.fill(notas);
                break;

            // G. Eliminar la primera nota
            case "G":
                if (arrayNotas.length == 0) {
                    // b. Informar si la lista estaba vacía.
                    window.alert("La lista está vacía");
                } else {
                    // a. Eliminar el primer elemento de la lista.
                    arrayNotas.shift();
                    window.alert("Eliminado el primer elemento");
                    if (arrayNotas.length == 0) {
                        window.alert("La lista ha quedado vacía");
                    }
                }
                break;

            // H. Eliminar la segunda nota
            case "H":
                // b. Comprobar que existe una segunda nota antes de eliminarla.
                if (arrayNotas.length >= 2) {
                    // a. Eliminar el segundo elemento de la lista.
                    window.alert("Eliminada la segunda nota");
                    arrayNotas.splice(1, 1);
                } else {
                    window.alert("No existe una segunda nota");
                }
                break;

            // I. Establecer a 0 todos los suspensos
            case "I":
                if (arrayNotas.length == 0) {
                    window.alert("La lista está vacía");
                } else {
                    // a. Recorrer la lista.
                    for (let i = 0; i < arrayNotas.length; i++) {
                        if (arrayNotas[i] < 5) {
                            // b. Sustituir por 0 todas las notas inferiores a 5.
                            arrayNotas[i] = 0;
                        }
                    }
                    window.alert("Todos los suspensos han cambiado a 0");
                }
                break;

            // J. Sustituir una nota por otra
            case "J":
                let origen = 0;
                let destino = 0;

                // a. Solicitar una nota de origen y otra de destino.
                do {
                    origen = parseFloat(window.prompt("Introduce un número de origen válido: "));
                } while (isNaN(origen) || origen < 0 || origen > 10);
                do {
                    destino = parseFloat(window.prompt("Introduce un número de destino válido: "));
                } while (isNaN(destino) || destino < 0 || destino > 10);

                for (let i = 0; i < arrayNotas.length; i++) {
                    // b. Sustituir todas las apariciones de la nota de origen por la nota de destino.
                    if (arrayNotas[i] == origen) {
                        arrayNotas[i] = destino;
                    }
                }
                window.alert("Notas sustituidas correctamente");
                break;

            // K. Añadir una nota en una posición determinada
            case "K":
                let pos = 0;
                // a. Solicitar una nota.
                nota = introducirNota();
                // b. Solicitar la posición en la que se desea insertar.
                do {
                    pos = parseInt(window.prompt("Introduce la posición: "));
                } while (isNaN(pos) || pos < 0 || pos > arrayNotas.length);
                // c. Insertar la nota en esa posición, desplazando los elementos posteriores.
                arrayNotas.splice(pos, 0, nota);
                window.alert(`Añadida la nota ${nota} en la posición ${pos}`);
                break;

            // L. Contar el número de suspensos
            case "L":
                let suspensos = 0;
                // a. Recorrer la lista.
                for (let i = 0; i < arrayNotas.length; i++) {
                    // b. Contar cuántas notas son inferiores a 5.
                    if (arrayNotas[i] < 5) {
                        suspensos++;
                    }
                }
                // c. Mostrar el número total de suspensos.
                window.alert("El número de suspensos es: " + suspensos);
                break;

            // El caso M para salir
            case "M":
                salida = true;
                break;

            default:
                // En el caso de que no entre en ninguna opción.
                window.alert("Introduce una opción válida.");
                break;
        }
        console.table(arrayNotas);

        // El menú deberá repetirse continuamente hasta que el usuario seleccione la
        // opción de salir.
    } while (!salida);
    console.table(arrayNotas);
}

ejercicioI();


// Ejercicio II (Conjuntos) : Gestión de participantes en actividades extraescolares
// Desarrolla un programa en JavaScript que permita gestionar los participantes inscritos en 
// diferentes actividades extraescolares de un centro educativo utilizando conjuntos (Set).

// El programa comenzará con un conjunto vacío y mostrará un menú
// interactivo que se repetirá hasta que el usuario decida salir.

// Función para pedir el nombre
function solicitarNombre() {
    let nombre = "";
    do {
        nombre = window.prompt("Introduce el nombre del participante:");
    } while (nombre == null || nombre.trim() == "");
    return nombre.trim();
}

function ejercicioII() {
    // Conjunto vacío
    const setParticipantes = new Set();
    let salida = false;
    let nombre = "";

    do {
        // Menú interactivo repetitivo hasta salir
        const respuesta = window.prompt("Introduce tu opción: \n" +
            "A. Inscribir un participante \n" +
            "B. Dar de baja un participante \n" +
            "C. Comprobar inscripción \n" +
            "D. Mostrar participantes \n" +
            "E. Vaciar inscripciones: Eliminar todos los participantes del conjunto. \n" +
            "F. Salir").toUpperCase();

        switch (respuesta) {
            // A. Inscribir un participante
            case "A":
                // a. Solicitar el nombre de un participante.
                nombre = solicitarNombre();

                // c. No permitir nombres duplicados. --> Los conjuntos de por sí no pueden tener duplicados
                if (setParticipantes.has(nombre)) {
                    window.alert("El participante ya estaba incluido anteriormente");
                } else {
                    // b. Añadirlo al conjunto.
                    window.alert("Participante añadido correctamente");
                    setParticipantes.add(nombre);
                }
                break;

            // B. Dar de baja un participante
            case "B":
                // a. Solicitar un nombre.
                nombre = solicitarNombre();

                // b. Eliminarlo del conjunto si existe.
                if (setParticipantes.has(nombre)) {
                    setParticipantes.delete(nombre);
                    window.alert("Participante dado de baja correctamente");
                } else {
                    // c. Informar si no se encuentra.
                    window.alert("No se ha encontrado ese nombre en el conjunto");
                }
                break;

            // C. Comprobar inscripción
            case "C":
                // a. Solicitar un nombre.
                nombre = solicitarNombre();

                // b. Indicar si está inscrito en la actividad.
                if (setParticipantes.has(nombre)) {
                    window.alert("Está suscrito");
                } else {
                    window.alert("No está suscrito");
                }
                break;

            // D. Mostrar participantes
            case "D":
                let mensaje = "";

                if (setParticipantes.size == 0) {
                    window.alert("No hay participantes inscritos");
                    break;
                } else {
                    // a. Recorrer el conjunto
                    for (const valor of setParticipantes) {
                        mensaje += "Participante: " + valor + "\n";
                    }

                    // b. Mostrar todos los participantes inscritos y mostrar el número total de participantes.
                    window.alert(mensaje + "En total hay: " + setParticipantes.size);
                }
                break;

            // E. Vaciar inscripciones: Eliminar todos los participantes del conjunto.
            case "E":
                window.alert("Se han eliminado todos los participantes");
                setParticipantes.clear();
                break;

            // F. Salir
            case "F":
                salida = true;
                break;

            default:
                // En el caso de que no entre en ninguna opción.
                window.alert("Introduce una opción válida.");
                break;
        }
        console.table(setParticipantes);

    } while (!salida);
    console.table(setParticipantes);

}

ejercicioII();


// Ejercicio III (Mapas): Gestión de una biblioteca
// Desarrolla un programa en JavaScript que permita gestionar el catálogo de
// libros de una biblioteca utilizando mapas (Map).

// Cada libro tendrá como clave su ISBN y como valor un objeto con
// información del libro (título, autor y número de ejemplares disponibles).
// El programa comenzará con un mapa vacío y mostrará un menú interactivo
// que se repetirá hasta que el usuario decida salir.

function solicitarTexto(mensaje) {
    let texto = "";
    do {
        texto = window.prompt(mensaje);
    } while (texto === null || texto.trim() === "");
    return texto.trim();
}

function solicitarCantidad(mensaje) {
    let cantidad = 0;
    do {
        cantidad = parseInt(window.prompt(mensaje));
    } while (isNaN(cantidad) || cantidad < 0);
    return cantidad;
}

function ejercicioIII() {
    let isbn = "";
    const mapaLibros = new Map();
    let salida = false;

    class Libro {
        constructor(titulo, autor, cantidad) {
            this.titulo = titulo;
            this.autor = autor;
            this.cantidad = cantidad;
        }

        getTitulo() {
            return this.titulo;
        }

        setTitulo(titulo) {
            this.titulo = titulo;
        }

        getAutor() {
            return this.autor;
        }

        setAutor(autor) {
            this.autor = autor;
        }

        getCantidad() {
            return this.cantidad;
        }

        setCantidad(cantidad) {
            this.cantidad = cantidad;
        }

        toString() {
            return "\n Título: " + this.titulo + "\n Autor: " + this.autor + "\n Cantidad: " + this.cantidad;
        }
    }

    do {
        // Menú interactivo repetitivo hasta salir
        const respuesta = window.prompt("Introduce tu opción: \n" +
            "A. Añadir un libro \n" +
            "B. Eliminar un libro \n" +
            "C. Consultar un libro \n" +
            "D. Mostrar catálogo \n" +
            "E. Modificar ejemplares \n" +
            "F. Buscar libros de un autor \n" +
            "G. Prestar un libro \n" +
            "H. Devolver un libro \n" +
            "I. Mostrar estadísticas \n" +
            "J. Vaciar catálogo: Eliminar todos los libros del mapa. \n" +
            "K. Salir: Finalizar el programa.").toUpperCase();

        switch (respuesta) {

            // A. Añadir un libro
            case "A":
                // a. Solicitar ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro para añadirlo:");
                // c. Comprobar que el ISBN no exista previamente.
                if (mapaLibros.has(isbn)) {
                    window.alert("El libro con ese ISBN ya existe.");
                } else {
                    // a. Solicitar título, autor y número de ejemplares
                    const titulo = solicitarTexto("Introduce el título del libro:");
                    const autor = solicitarTexto("Introduce el autor del libro:");
                    const cantidad = solicitarCantidad("Introduce el número de ejemplares disponibles:");
                    // b. Añadir el libro al mapa.
                    const libro = new Libro(titulo, autor, cantidad);
                    mapaLibros.set(isbn, libro);
                    window.alert("Libro añadido correctamente.");
                }
                break;

            // B. Eliminar un libro
            case "B":
                // a. Solicitar un ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro:");
                if (mapaLibros.has(isbn)) {
                    // b. Eliminar el libro si existe.
                    mapaLibros.delete(isbn);
                    window.alert("Libro eliminado correctamente.");
                } else {
                    // c. Informar si no se encuentra.
                    window.alert("No se encontró un libro con ese ISBN.");
                }
                break;

            // C. Consultar un libro
            case "C":
                // a. Solicitar un ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro a consultar:");
                if (mapaLibros.has(isbn)) {
                    // b. Mostrar toda la información del libro.
                    window.alert("\n Libro con isbn " + isbn + " --> Información del libro: " + mapaLibros.get(isbn).toString());
                } else {
                    // c. Informar si no existe.
                    window.alert("No se encontró un libro con ese ISBN.");
                }
                break;

            // D.Mostrar catálogo
            case "D":
                if (mapaLibros.size == 0) {
                    window.alert("El catálogo está vacío.");
                } else {
                    window.alert("Mira la consola para ver los libros!");
                    // a.Recorrer el mapa y mostrar todos los libros con sus datos.
                    for (let isbn of mapaLibros.keys()) {
                        console.log("\n Libro con isbn " + isbn + " --> Información del libro: " + mapaLibros.get(isbn).toString());
                    }
                    // b.Mostrar el número total de libros registrados.
                    window.alert("El número total de libros registrados es: " + mapaLibros.size);
                }

                break;

            case "E":
                // a. Solicitar un ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro:");
                // b. Solicitar una cantidad.
                if (mapaLibros.has(isbn)) {
                    const cantidadLibros = solicitarCantidad("Introduce la nueva cantidad de ejemplares:");
                    // c. Actualizar el número de ejemplares disponibles.
                    mapaLibros.get(isbn).setCantidad(cantidadLibros);
                    window.alert("Ejemplares actualizados correctamente.");
                } else {
                    window.alert("No se encontró un libro con ese ISBN.");
                }
                break;

            // F. Buscar libros de un autor
            case "F":
                // a. Solicitar el nombre de un autor.
                const autorBuscado = solicitarTexto("Introduce el nombre del autor:");
                let encontrado = false;

                // b. Mostrar todos los libros escritos por ese autor.
                for (let isbn of mapaLibros.keys()) {
                    if (mapaLibros.get(isbn).getAutor() == autorBuscado) {
                        console.log("\n Libro con isbn " + isbn + " --> Información del libro: " + mapaLibros.get(isbn).toString());
                        encontrado = true;
                    }
                }
                if (encontrado) {
                    window.alert("Búsqueda completada. Mira la consola para ver los resultados.");
                } else {
                    window.alert("No se encontraron libros de ese autor.");
                }
                break;

            // G. Prestar un libro
            case "G":
                // a. Solicitar el ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro a prestar:");

                // b. Si existen ejemplares disponibles, restar uno.
                if (mapaLibros.has(isbn) && mapaLibros.get(isbn).getCantidad() > 0) {
                    mapaLibros.get(isbn).setCantidad(mapaLibros.get(isbn).getCantidad() - 1);
                    window.alert("Préstamo exitoso");
                } else {
                    // c. Si no quedan ejemplares, mostrar un mensaje indicándolo.
                    window.alert("No quedan ejemplares disponibles del libro con ISBN " + isbn);
                }
                break;

            // H. Devolver un libro
            case "H":
                // a. Solicitar el ISBN.
                isbn = solicitarTexto("Introduce el ISBN del libro a devolver:");

                // b. Incrementar en uno el número de ejemplares disponibles.
                if (mapaLibros.has(isbn)) {
                    mapaLibros.get(isbn).setCantidad(mapaLibros.get(isbn).getCantidad() + 1);
                    window.alert("Libro devuelto");
                } else {
                    window.alert("No se encontró el libro con isbn " + isbn);
                }
                break;

            // I. Mostrar estadísticas
            case "I":
                if (mapaLibros.size === 0) {
                    window.alert("El catálogo está vacío, no es posible calcular las estadísticas.");
                } else {
                    let cantidadTotal = 0;
                    let maxEjemplares = -Infinity;
                    let libroConMasEjemplares = null;

                    for (let isbn of mapaLibros.keys()) {
                        // b. Calcular el total de ejemplares disponibles.
                        cantidadTotal += mapaLibros.get(isbn).getCantidad();
                        if (mapaLibros.get(isbn).getCantidad() > maxEjemplares) {
                            // c. Mostrar el libro con más ejemplares disponibles.
                            maxEjemplares = mapaLibros.get(isbn).getCantidad();
                            libroConMasEjemplares = mapaLibros.get(isbn);
                        }
                    }

                    window.alert(
                        // a. Mostrar el número total de libros registrados.
                        "Total de libros registrados: " + mapaLibros.size + "\n" +
                        "Total de ejemplares disponibles: " + cantidadTotal + "\n" +
                        "Libro con más ejemplares:" + libroConMasEjemplares.toString());
                }
                break;

            // J. Vaciar catálogo: Eliminar todos los libros del mapa.
            case "J":
                mapaLibros.clear();
                window.alert("El catálogo ha sido vaciado.");
                break;

            // K. Salir: Finalizar el programa.
            case "K":
                salida = true;
                break;

            default:
                // En el caso de que no entre en ninguna opción.
                window.alert("Introduce una opción válida.");
                break;
        }
        console.table(mapaLibros);

    } while (!salida);
    console.table(mapaLibros);

}

ejercicioIII();