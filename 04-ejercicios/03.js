function getByIdx(arr, idx) {
    if ( idx < 0  || arr.length <= idx);
    {
        return "elemnto no existe"
    }
     
    return arr[idx];
}
let resultado = getByIdx([1, 2], 0);
console.log(resultado);