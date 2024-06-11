 // eXPRECION ? ' si es true ' : si es false ' 
 



 /*let edad = 55 ;

 let accseso = edad > 17 ? 'Permitir ingreso' : 'No puede ingresar ';


 console.log(accseso);

 
 */



// Solicitar al usuario que ingrese su edad
let edad = prompt('Ingrese su edad:');

// Convertir la entrada a número
edad = Number(edad);

// Usar el operador ternario para determinar el acceso
let accseso = edad > 17 ? 'Permitir ingreso' : 'No puede ingresar';

// Mostrar el resultado en la consola
console.log(accseso);

// Mostrar el resultado en una alerta
alert(accseso);



