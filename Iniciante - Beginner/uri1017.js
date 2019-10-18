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
let tempoGasto = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

let distancia = tempoGasto * velocidadeMedia;
let economiaCombustivel = 12;
let litrosGastos = distancia/economiaCombustivel;

console.log(litrosGastos.toFixed(3));