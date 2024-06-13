// let resltado = toPairs(array);
// console,log(resultado);


// let array = [
//     { id: 1, name: 'juan' },
//     { id: 2, name: 'Felipe' },
//     { id: 3, name: 'Jancho' }
//   ];
  
//   function toCollection(arr) {

//     let collection = [];
//     for (idx in arr) {
//         let elemento = arr[idx];
//         collection[idx] = elemento[1];
//         collection[idx].id = elemento[0];

//     }
//     return collection;
//   }
  
//   let resultado = toCollection(pairs);
//   console.log(resultado);
let array = [
    { id: 1, name: 'juan' },
    { id: 2, name: 'Felipe' },
    { id: 3, name: 'Jancho' }
  ];
  
  let pairs = [
    [1, { id: 1, name: 'juan' }],
    [2, { id: 2, name: 'Felipe' }],
    [3, { id: 3, name: 'Jancho' }]
  ];
  
  function toCollection(pairs) {
    let collection = [];
    for (let pair of pairs) {
      let id = pair[0];
      let elemento = pair[1];
      collection.push({ id: id, name: elemento.name });
    }
    return collection;
  }
  
  let resultado = toCollection(pairs);
  console.log(resultado);
  

  