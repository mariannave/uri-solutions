/*
  Entrada: 4.5 -2.2
  Saída: Q4
  -----------------
  Entrada: 0.1 0.1
  Saída: Q1
  -----------------
  Entrada: 0.0 0.0
  Saída: Origem
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x,y] = lines.shift().split(' ').map(x => Number(x))

switch(true){
    case x === 0 && y === 0:
        console.log("Origem")
        break;
    case x === 0:
        console.log("Eixo Y")
        break;
    case y === 0:
        console.log("Eixo X")
        break;
    case x > 0 && y > 0:
        console.log("Q1")
        break;
    case x < 0 && y > 0:
        console.log("Q2")
        break;
    case x < 0 && y < 0:
        console.log("Q3")
        break;
    case x > 0 && y < 0:
        console.log("Q4")
        break;
}