/**
 * crear un algoritmo que tome un array de 
 * objetos yy devuelva un array de pares 
 * 
 */

//  let array = [{
//     id: 1,
//     name : 'juan',
// }, 
// {
//     id : 2,
//     name : 'Felipe',
// }, 
// {
//     id : 3 ,
//     name : ' Jancho',
// } ]; 
// let pares = [
//     [1, { id: 1, name: "juan"}],
//     [2, {id: 2 , name : "Felipe"}],
//     [3, {id: 3 , name: "jancho"}],
// ];

// function toPairs(arr) {
//     let pairs = [];
//     for (idx in arr){
//         let elemento = arr[idx];
//         pairs[idx] = [elemento.id, elemento];
//     }
//     return pairs;
// }


// let resltado = toPairs(array);
// console,log(resultado);
let array = [
    { id: 1, name: 'juan' },
    { id: 2, name: 'Felipe' },
    { id: 3, name: 'Jancho' }
  ];
  
  function toPairs(arr) {
    let pairs = [];
    for (let idx = 0; idx < arr.length; idx++) {
      let elemento = arr[idx];
      pairs.push([elemento.id, elemento]);
    }
    return pairs;
  }
  
  let resultado = toPairs(array);
  console.log(resultado);
  