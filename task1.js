function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Type your code below this line!

const newMail = new Mail('hello', 'world');

// Type your code above this line!

console.log(newMail.subject + ': ' + newMail.message)

    /*Se te ha dado un constructor para un objeto Mail.

    Modifica el código para que el asunto sea la palabra hello y el mensaje
    sea la palabra world. */