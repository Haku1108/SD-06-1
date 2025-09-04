function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Type your code below this line!

const newMail = new Mail(process.argv[3], process.argv[4])
// Type your code above this line!

console.log(newMail.subject + ': ' + newMail.message)
    /*Se te ha dado un constructor para un objeto Mail.

    Modifica el código para que el usuario proporcione su propio asunto y
    mensaje como parámetros de ejecución en ese orden. Los parámetros de
    ejecución son los valores que se pasan a un programa cuando se ejecuta.
    Por ejemplo, si el usuario ejecuta el programa con el comando node
    index.js 2 hello world, entonces "node" es el programa, "index.js" es el
    primer parámetro, "2" es el segundo parámetro, y "hello" y "world" son el
    tercer y cuarto parámetro respectivamente. Puedes acceder a los parámetros
    de ejecución en tu programa usando el arreglo process.argv. En el ejemplo,
    el proceso y el primer parámetro (índices 0 y 1 del arreglo process.argv)
    son "node" e "index.js", por lo que puedes ignorarlos. El segundo
    parámetro (índice 2) es usado por este programa para determinar el número
    de la tarea a ejecutar, así que también puedes ignorarlo. Puedes acceder
    al asunto y al mensaje usando process.argv[3] y process.argv[4]
    respectivamente. */