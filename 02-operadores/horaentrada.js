

let horaEntrada =  prompt('Ingrese la hora de entrada');
 

horaEntrada = Number(horaEntrada);

 let acceso = horaEntrada  <= 8 ? 'llegas a tiempo ' : 'ya no puedes pasar chavo regresate a tu casa ';

 console.log(acceso);

 alert(acceso);