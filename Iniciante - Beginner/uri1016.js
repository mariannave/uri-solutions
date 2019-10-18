/*
  Entrada: 30
  Saída: 60 minutos
  -----------------
  Entrada: 110
  Saída: 220 minutos
  -----------------
  Entrada: 7
  Saída: 14 minutos
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let distancia = parseInt(lines.shift());

let velocidadeCarroX = 60;
let velocidadeCarroY = 90;

//pegar a diferença entre os carros, como este valor poderia vir negativo, usa-se o valor absoluto
let diferencaVelocidade = Math.abs(velocidadeCarroX - velocidadeCarroY);

//como as unidades de tempo sao em hora, a divisao tambem é em hora. Para pegar os minutos, multiplica-se por 60
let tempoEmMinutos = (distancia/diferencaVelocidade) * 60;

console.log(`${tempoEmMinutos} minutos`);