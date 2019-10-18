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
let inputValue = parseInt(lines.shift());

let bankNotesArr = [100, 50, 20, 10, 5, 2, 1];

console.log(inputValue);

for(let bankNote of bankNotesArr){
    let billQuantity = parseInt(inputValue/bankNote);
    inputValue = inputValue % bankNote;
    console.log(`${billQuantity} nota(s) de R$ ${bankNote},00`);
}