/*
  Entrada: 10
           85
  Saída: 70.833
  -----------------
  Entrada: 2
           92
  Saída: 15.333
  -----------------
  Entrada: 22
           67
  Saída: 122.833
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let spentTime = parseInt(lines.shift());
let averageSpeed = parseInt(lines.shift());

let distance = spentTime * averageSpeed;
let fuelEconomy = 12;
let liters = distance/fuelEconomy;

console.log(liters.toFixed(3));