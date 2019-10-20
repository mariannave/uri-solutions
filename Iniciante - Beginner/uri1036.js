/*
  Entrada: 10.0 20.1 5.1
  Saída: R1 = -0.29788
         R2 = -1.71212
  -----------------
  Entrada: 0.0 20.0 5.0
  Saída: Impossivel calcular
  -----------------
  Entrada: 10.3 203.0 5.0
  Saída: R1 = -0.02466
         R2 = -19.68408
  -----------------
  Entrada: 10.0 3.0 5.0
  Saída: Impossivel calcular
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines.shift().split(' ').map(x => Number(x));
let Delta = (Math.pow(B,2) - (4*A*C));

if(A === 0 || Delta < 0){
  console.log("Impossivel calcular");
} else{
    let R1 = (-B + Math.sqrt(Delta))/(2*A);
    let R2 = (-B - Math.sqrt(Delta))/(2*A);
    console.log("R1 =",R1.toFixed(5));
    console.log("R2 =",R2.toFixed(5));
}