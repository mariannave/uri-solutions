/*
  Entrada: 7.0 5.0 7.0
  Saída: TRIANGULO ACUTANGULO
         TRIANGULO ISOSCELES
  -----------------
  Entrada: 6.0 6.0 10.0
  Saída: TRIANGULO OBTUSANGULO
         TRIANGULO ISOSCELES
  -----------------
  Entrada: 6.0 6.0 6.0
  Saída: TRIANGULO ACUTANGULO
         TRIANGULO EQUILATERO
  -----------------
  Entrada: 5.0 7.0 2.0
  Saída: NAO FORMA TRIANGULO
  -----------------
  Entrada: 6.0 8.0 10.0
  Saída: TRIANGULO RETANGULO
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numerosArr = lines.shift().split(' ').map(x => Number(x))

//deixar o array ordenado para a validaçao do triangulo
let [A,B,C] = numerosArr.sort((a, b) => b - a)

let A2 = (Math.pow(A, 2))
let B2 = (Math.pow(B, 2))
let C2 = (Math.pow(C, 2))

let naoTriangulo = A >= B + C
let trianguloReto = A2 == B2 + C2
let trianguloObtuso = A2 > B2 + C2
let trianguloAcutangulo = A2 < B2+C2

switch(true){
  case naoTriangulo:
    console.log("NAO FORMA TRIANGULO")
    break;
  case trianguloReto:
    console.log("TRIANGULO RETANGULO")
    break;
  case trianguloObtuso:
    console.log("TRIANGULO OBTUSANGULO")
    break;
  case trianguloAcutangulo:
    console.log("TRIANGULO ACUTANGULO")
    break;
}

switch(true){
  case A == B && B == C:
    console.log("TRIANGULO EQUILATERO")
    break;
  case (A == B && B != C) || (A == C && C != B) || (B == C && C != A):
    console.log("TRIANGULO ISOSCELES")
    break;
}