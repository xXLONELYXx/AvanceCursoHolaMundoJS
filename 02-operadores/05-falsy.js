// short-circuit




// falso
// false 
// 0
// ''
// null 
// undefined 
// NaN



let nombre = 'juani';
let username = nombre || 'Angelitope';
console.log(username);



function fn1 () {
    console.log('Soy fn1');
    return false;
}

function fn2 () {
    console.log('soy fn2');
    return true;
}


let x = fn1() && fn2();

