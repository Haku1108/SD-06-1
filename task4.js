// Type your code below this line!
function Journey(start, end) {
  this.start = start;
  this.end = end;
}

const from = process.argv[2];
const to = process.argv[3];

// Type your code above this line!

const travel = new Journey(from, to);

console.log('Booking a taxi from ' + travel.start + ' to ' + travel.end + '.')
    /**Para esta tarea, deberás escribir tu propio constructor.

    Crea un constructor llamado Journey que tome dos parámetros: start y end.
    Crea un par de constantes llamadas from y to, y asígnales los valores de los
    argumentos de la línea de comandos. */