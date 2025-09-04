

// Type your code below this line!
function FriendsList(friends) {
  this.friends = friends;
}

const num = parseInt(process.argv[2]);
const nombres = process.argv.slice(
    3,
    3 + num,
);
const MyFriends = new FriendsList(nombres);

console.log(MyFriends.friends);



// Type your code above this line!

/**Crea un constructor para un objeto FriendsList que almacene una lista de
nombres en un arreglo.

Tu programa debe pedirle al usuario un número, luego pedir esa cantidad de veces
para listar cada nombre uno por uno. Tu programa debe imprimir el arreglo
directamente en la consola. La salida debe verse así: [ 'name1', 'name2' ] */