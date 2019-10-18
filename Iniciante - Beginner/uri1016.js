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
let distance = parseInt(lines.shift());

let speedCarX = 60;
let speedCarY = 90;

//Gets the absolute value from the difference
let speedDiff = Math.abs(speedCarX - speedCarY);

//Since the units are in hours, the division returns travel time in hours. Multiply by 60 to get it in seconds
let travelTimeInSeconds = (distance/speedDiff) * 60;

console.log(`${travelTimeInSeconds} minutos`);