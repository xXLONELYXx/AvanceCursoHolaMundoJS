/*function suma (a , b) {
    return a + b;

};

let sumando = suma (5, 6);
console.log(sumando);


console.log(typeof suma

);*/


function suma (a, b){
    console.log(arguments);
    return a+b;
}

let resultado = suma (5, 7, 4, 6, 7,);
console.log(resultado);
console.log(typeof suma);