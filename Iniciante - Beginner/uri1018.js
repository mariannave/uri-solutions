/*
  Entrada: 576
  Saída: 5 nota(s) de R$ 100,00
         1 nota(s) de R$ 50,00
         1 nota(s) de R$ 20,00
         0 nota(s) de R$ 10,00
         1 nota(s) de R$ 5,00
         0 nota(s) de R$ 2,00
         1 nota(s) de R$ 1,00
  -----------------
  Entrada: 11257
  Saída: 112 nota(s) de R$ 100,00
           1 nota(s) de R$ 50,00
           0 nota(s) de R$ 20,00
           0 nota(s) de R$ 10,00
           1 nota(s) de R$ 5,00
           1 nota(s) de R$ 2,00
           0 nota(s) de R$ 1,00
  -----------------
  Entrada: 503
  Saída: 5 nota(s) de R$ 100,00
         0 nota(s) de R$ 50,00
         0 nota(s) de R$ 20,00
         0 nota(s) de R$ 10,00
         0 nota(s) de R$ 5,00
         1 nota(s) de R$ 2,00
         1 nota(s) de R$ 1,00
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let valorInput = parseInt(lines.shift());

let notasDoReal = [100, 50, 20, 10, 5, 2, 1];

console.log(valorInput);

for(let notaDoReal of notasDoReal){
    let quantidade = parseInt(valorInput/notaDoReal);
    valorInput = valorInput % notaDoReal;
    console.log(`${quantidade} nota(s) de R$ ${notaDoReal},00`);
}