//Personajes de TV

let nombre = "tanjiro";
let anime = "Demon slayer";
let edad = 18;

let personaje = {
    nombre: "tanjiro",
    anime: "Demon Slader",
    edad: 18,
};//Objeto literal 
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["edad"]);


personaje.edad = 33;

personaje["edad"] = 222;
console.log(personaje);



let llave = edad;
personaje[llave] = 122;
console.log(llave);

delete personaje.anime;
console.log(personaje);

