/*
    OBJETIVO: trocar o valor das variáveis
    ex: se no começo A vale 10 e B vale 5, no final A deve valer 5 e B 10
*/

let a = 7;
let b = 94;
let c = a;

console.log('O valor de "a" é: ' + a);
console.log('O valor de "b" é: ' + b);

a = b;
b = c;

console.log('O valor de "a" é: ' + a);
console.log('O valor de "b" é: ' + b);

/*
    OUTRA FORMA DE FAZER: [a, b] = [b, a]
*/
